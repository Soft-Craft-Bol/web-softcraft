import Image from 'next/image';

const ContactImg = () => {
  return (
    <div className='absolute -left-50 bottom-0 rotate-12 mix-blend-color-dodge animate-pulse z-0 w-[180px] h-[180px] xl:w-[320px] xl:h-[320px]'>
      <Image
        src='/foto-inicio.png'
        alt='bulb'
        width={460}
        height={400}
        className='object-contain'
      />
    </div>
  );
};

export default ContactImg;