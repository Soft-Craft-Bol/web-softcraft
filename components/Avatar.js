import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex w-full h-full'>
      <Image 
        src="/fondo.png"
        width={532}
        height={478}
        alt="Softcraft avatar"
        className='w-full h-full object-contain 2xl:scale-125'
        priority
      />
    </div>
  );
};

export default Avatar;