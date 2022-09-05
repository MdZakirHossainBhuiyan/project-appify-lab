import Header from './Components/Header/Header';
import './App.css';
import Explore from './Components/Explore/Explore';
import Download from './Components/Download/Download';
import SuggestedPeople from './Components/SuggestedPeople/SuggestedPeople';
import FollowerRequest from './Components/FollowerRequest/FollowerRequest';
import FriendsList from './Components/FriendsList/FriendsList';
import ShareStory from './Components/ShareStory/ShareStory';
import CreatePost from './Components/CreatePost/CreatePost';
import FilterPost from './Components/FilterPost/FilterPost';
import NoPostFound from './Components/NoPostFound/NoPostFound';
import VotingPost from './Components/PostComponents/VotingPost/VotingPost';
import ImageGalleryPost from './Components/PostComponents/ImageGalleryPost/ImageGalleryPost';
import UpdateProfilePost from './Components/PostComponents/UpdateProfilePost/UpdateProfilePost';
import SharedPostComponent from './Components/PostComponents/SharedComponents/SharedPostComponent/SharedPostComponent';

//user image
import floPharoah from './Image/floPharoah.jpg';
import habib from './Image/habibH.jpg';
import mac from './Image/macDusa.jpg';
import sadek from './Image/sadek.jpg';
import kamran from './Image/kamran.jpg';
import salman from './Image/salman.jpg';

//post image
import floPostImg from './Image/g1.jpg';

const App = () => {

    let postData = [
        {
            id: 1,
            userName: 'Flo Pharoah',
            userImage: floPharoah,
            postTime: '23 days',
            postDescription: "'Each year we look forward to the Children's Leadership Forum Pre-Conference, where we get to spend intentional time with parents, teachers, and leaders of the next generation. If you weren't able to join us this afternoon, the recording will be available to view on-demand tomorrow evening! Don't miss out - be sure you have your Online Viewing Pass ready to join us LIVE tomorrow at 1pm! Register now",
            postImage: floPostImg,
        },
        {
            id: 2,
            userName: 'Habib Hossain',
            userImage: habib,
            postTime: '24 days',
            postVideo: <iframe width="100%" height="315" src="https://www.youtube.com/embed/D7xWXk5T3-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        },
        {
            id: 3,
            userName: 'Flo Pharoah',
            userImage: floPharoah,
            postTime: '25 days',
            postDescription: "'Each year we look forward to the Children's Leadership Forum Pre-Conference, where we get to spend intentional time with parents, teachers, and leaders of the next generation. If you weren't able to join us this afternoon, the recording will be available to view on-demand tomorrow evening! Don't miss out - be sure you have your Online Viewing Pass ready to join us LIVE tomorrow at 1pm! Register now",
        },
        {
            id: 4,
            userName: 'Mac Dusa',
            userImage: mac,
            postTime: '25 days',
            postDescription: "Don't miss out - be sure you have your Online Viewing Pass ready to join us LIVE tomorrow at 1pm! Register now",
        },
        {
            id: 5,
            userName: 'Flo Pharoah',
            userImage: floPharoah,
            postTime: '26 days',
            postDescription: "the recording will be available to view on-demand tomorrow evening! Don't miss out - be sure you have your Online Viewing Pass ready to join us LIVE tomorrow at 1pm! Register now",
        },
        {
            id: 6,
            userName: 'Flo Pharoah',
            userImage: floPharoah,
            postTime: '26 days',
            postDescription: "the recording will be available to view on-demand tomorrow evening! Don't miss out",
        },
        {
            id: 7,
            userName: 'Sadek Hossain',
            userImage: sadek,
            postTime: '27 days',
            postDescription: "Click your home icon to refresh feed",
        },
        {
            id: 8,
            userName: 'Kamran ahmed',
            userImage: kamran,
            postTime: '27 days',
            postDescription: 'jhe',
        },
        {
            id: 9,
            userName: 'Flo Pharoah',
            userImage: floPharoah,
            postTime: '28 days',
            postDescription: "where we get to spend intentional time with parents, teachers, and leaders of the next generation. If you weren't able to join us this afternoon, the recording will be available to view on-demand tomorrow evening! Don't miss out",
        },
        {
            id: 10,
            userName: 'Salman ahmed',
            userImage: salman,
            postTime: '29 days',
            postDescription: "hello",
        }
    ]

    return (
        <div className='appStyle'>
            <Header />
            <div className='appContentBody'>
                <div className='leftContentBody'>
                    <Explore />
                    <Download />
                    <SuggestedPeople />
                </div>
                <div className='middleContentBody'>
                    <ShareStory />
                    <CreatePost />
                    <FilterPost />
                    <VotingPost />
                    <ImageGalleryPost />
                    <UpdateProfilePost />
                    {
                        postData.map((item, index) => <SharedPostComponent item={item} key={index} />)
                    }
                    <NoPostFound />
                </div>
                <div className='rightContentBody'>
                    <FollowerRequest />
                    <FriendsList />
                </div>
            </div>
        </div>
    );
}

export default App;
