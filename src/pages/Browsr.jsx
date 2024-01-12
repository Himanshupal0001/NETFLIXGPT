import React from 'react'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
function Browsr() {
    useNowPlayingMovies();
    return (
        <div className='flex items-center  flex-col'>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
            MianContainer
                -VideoBackground
                -Video Title
                -video details and buttons
            SecondaryContainer
                -MovieList *n
                -MovieCard *n
            */}
        </div>
    )
}

export default Browsr


/*

useEffect(() => {

        const docRef = doc(db, 'customers', uid,);
        const fetchData = async () => {
            try {
                const document = await getDoc(docRef);
                if (document) {
                    setDocData(document.data());
                } else {
                    console.log('Document not found');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchData();
    }, [db, uid]);

  
*/

