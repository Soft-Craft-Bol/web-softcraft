import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='absolute -left-20 bottom-0 rotate-12 mix-blend-color-dodge animate-pulse z-0 w-[180px] h-[180px] xl:w-[320px] xl:h-[320px]'>
      <Image
        src='/bulb.png'
        alt='bulb'
        width={260}
        height={200}
        className='object-contain'
      />
    </div>
  );
};

export default Bulb;