import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


const Images = () => {

  
        const [currentImage, setCurrentImage] = useState(0);
        const [isViewerOpen, setIsViewerOpen] = useState(false);
        const images = [
          'https://mobirise.com/extensions/kidsm4/assets/images/children.jpg',
          'https://th.bing.com/th/id/R.27e5c288eee23f568675ad29a72012aa?rik=KAPvOzGu7GmKeA&pid=ImgRaw&r=0&sres=1&sresct=1',
          'https://th.bing.com/th/id/R.62b9625e0b02295f0cb121877c0c21a3?rik=CKhhQJjRrO9NeA&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f6%2fFarmer-Agriculture-Transparent-PNG.png&ehk=nvVZIdEGpwmInz5WZRsX1kYWE3VLb13YPk7cf%2fSb%2bFs%3d&risl=&pid=ImgRaw&r=0',
          'https://mobirise.com/extensions/kidsm4/assets/images/children.jpg',
          'https://th.bing.com/th/id/R.27e5c288eee23f568675ad29a72012aa?rik=KAPvOzGu7GmKeA&pid=ImgRaw&r=0&sres=1&sresct=1',
          'https://th.bing.com/th/id/R.62b9625e0b02295f0cb121877c0c21a3?rik=CKhhQJjRrO9NeA&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f6%2fFarmer-Agriculture-Transparent-PNG.png&ehk=nvVZIdEGpwmInz5WZRsX1kYWE3VLb13YPk7cf%2fSb%2bFs%3d&risl=&pid=ImgRaw&r=0',
          'https://mobirise.com/extensions/kidsm4/assets/images/children.jpg',
          'https://th.bing.com/th/id/R.27e5c288eee23f568675ad29a72012aa?rik=KAPvOzGu7GmKeA&pid=ImgRaw&r=0&sres=1&sresct=1',
          'https://th.bing.com/th/id/R.62b9625e0b02295f0cb121877c0c21a3?rik=CKhhQJjRrO9NeA&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f6%2fFarmer-Agriculture-Transparent-PNG.png&ehk=nvVZIdEGpwmInz5WZRsX1kYWE3VLb13YPk7cf%2fSb%2bFs%3d&risl=&pid=ImgRaw&r=0',

        ];
      
        const openImageViewer = useCallback((index) => {
          setCurrentImage(index);
          setIsViewerOpen(true);
        }, []);
      
        const closeImageViewer = () => {
          setCurrentImage(0);
          setIsViewerOpen(false);
        };
      
        return (
          <div className='relative bg-blue-400 h-auto'>
          <div className='flex gap-3 images overflow-y-auto py-4'>
            {images?.map((src, index) => (
              <img className='border-[#fa9db7] border-[3px] p-2 w-1/4 cursor-pointer rounded-[10px]'
                src={ src }
                onClick={ () => openImageViewer(index) }
                width="300"
                key={ index }
                style={{ margin: '2px' }}
                alt=""
              />
            ))}
      
            {isViewerOpen && (
              <ImageViewer className='images'
                src={ images }
                currentIndex={ currentImage }
                disableScroll={ true }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
              />
            )}
          </div>
          </div>
    )
}

export default Images