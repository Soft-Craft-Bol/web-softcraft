from pathlib import Path
import json
import sys
from playwright.sync_api import sync_playwright

out = Path(__file__).parent
routes = ['', 'services', 'work', 'about', 'team', 'process', 'testimonials', 'contact']
routes = [route.replace('home', '') for route in sys.argv[1:]] or routes
issues = []
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(reduced_motion='reduce')
    page.on('pageerror', lambda error: issues.append(str(error)))
    for theme in ['dark', 'light']:
        page.add_init_script("localStorage.setItem('softcraft-theme', '" + theme + "')")
        for route in routes:
            page.goto('http://127.0.0.1:3107/' + route)
            page.wait_for_load_state('networkidle')
            for width in [320, 360, 390, 768, 1280]:
                page.set_viewport_size({'width': width, 'height': 900})
                overflow = page.evaluate('document.documentElement.scrollWidth > innerWidth')
                if overflow:
                    issues.append(f'overflow: {route} {theme} {width}')
                if width in [390, 1280]:
                    page.screenshot(path=str(out / f'color-{route or "home"}-{theme}-{width}.png'), full_page=True)
            page.evaluate("document.documentElement.style.zoom = '2'")
            if page.evaluate('document.documentElement.scrollWidth > innerWidth'):
                issues.append(f'zoom overflow: {route} {theme}')
    page.goto('http://127.0.0.1:3107/services')
    page.wait_for_load_state('networkidle')
    page.locator('summary').nth(1).focus()
    page.keyboard.press('Enter')
    assert page.locator('details').nth(1).get_attribute('open') is not None
    page.set_viewport_size({'width': 390, 'height': 844})
    page.get_by_role('button', name='Menú').focus()
    page.keyboard.press('Enter')
    assert page.locator('#site-navigation').is_visible()
    page.keyboard.press('Escape')
    assert not page.locator('#site-navigation').is_visible()
    page.goto('http://127.0.0.1:3107/')
    page.wait_for_load_state('networkidle')
    canvas = page.locator('#tsparticles canvas')
    canvas.wait_for()
    before = canvas.screenshot()
    page.mouse.move(210, 300)
    page.wait_for_timeout(350)
    assert before != canvas.screenshot(), 'El canvas no cambia'
    browser.close()
print(json.dumps({'issues': issues, 'matrix': '8 rutas x 5 anchos x 2 temas; zoom 200%; teclado; canvas'}, ensure_ascii=False))
