import React from 'react';
import UserContent from '../SharedComponents/UserContent/UserContent';
import './ImageGalleryPost.css';
import imageOne from '../../../Image/g1.jpg';
import imageTwo from '../../../Image/g2.jpg';
import imageThree from '../../../Image/g3.jpg';
import imageFour from '../../../Image/g4.jpg';
import imageFive from '../../../Image/g5.jpg';
import UserReaction from '../SharedComponents/UserReaction/UserReaction';
import CommentInputField from '../SharedComponents/CommentInputField/CommentInputField';

const ImageGalleryPost = () => {
    return (
        <div className='galleryCard'>
            <UserContent
                name="Adnan Chowdhury"
                time="1 hours"
                from="gallery"
            />
            <div className='galleryBody'>
                <p>Have a good day!</p>
                <div className='topPart'>
                    <img src={imageOne} alt="imageOne" />
                    <img src={imageTwo} alt="imageOne" />
                </div>
                <div className='bottomPart'>
                    <img src={imageThree} alt="imageOne" />
                    <img src={imageFour} alt="imageOne" />
                    {/* <img className='lastImage' src={imageFive} alt="imageOne" /> */}
                    <div className='overlyImage'>
                        <p>+1</p>
                    </div>
                </div>
            </div>
            <UserReaction />
            <CommentInputField />
        </div>
    );
};

export default ImageGalleryPost;