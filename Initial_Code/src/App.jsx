import { useState, useEffect } from 'react'
import CSS_Logo from './assets/CSS_Logo.png'
import Fullstack_logo from './assets/fullstack_img.png'
import './App.css'

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [newReview, setNewReview] = useState('');

  useEffect(() => {

  }, []);

  // empty function where we are going to add logic for when we click on the submit button
  const submitReview = () => {

  }

  // empty function where we are going to add logic for when we delete a review
  const deleteReview = (movie) => {

  }

  // empty function where we are going to add logic for when we update a review
  const updateReview = (movie) => {

  }

  return (
    <div>
      {/* Logo Section */}
      <div className='img_div'>
        <img className="logo_img" src={CSS_Logo} alt="" />
        <img className="logo_img" src={Fullstack_logo} alt="" />
      </div>

      {/* Workshop Title Section */}
      <div>
        <p className="title">Computer Science Society Club: React Full-stack Workshop</p>
      </div>

      {/* Input Section */}
      <div>
        <div className="movie-review-title-container">                  
            <span className="movie-review-title-desc">Movie List</span>
        </div>
        <div className="movie-review-container">
              <div>
                  <p className="movie-review-desc">Add Movie Names + Reviews</p>
              </div>
              <div className="movie-review-inner-container">
                  <h3 className="movie-review-title">Enter Movie Name:</h3>
                  <input className='input_style' type="text" onChange={(e) => {
                    setMovieName(e.target.value);
                  }}/>

                  <br /><br />

                  <h3 className="movie-review-title">Enter Movie Review:</h3>
                  <textarea className='input_style2' type="text" onChange={(e) => {
                    setReview(e.target.value);
                  }} />
                  <br />
                  <button onClick={submitReview} class="submit-button">Submit</button>
              </div>
        </div>
      </div>


      {/* One movie row */}
      <div>
        <div className="movie-container">
              <div className="movie-review-inner-container">
                  <h3 className="movie-review-title">Spider Man (2002)</h3>
                 <br />
                  <p className="review-desc"> This movie is a masterpiece. Spider-Man (2002) is generally one of my favorite Spider-Man movies of all time, it tells an amazing origin story about Peter Parker and how he became everyone's favorite Wall-Crawler. First the actors did a fantastic job in this movie including William Defoe, his performance as Green Goblin is easily the most iconic part about this movie and how his interpretation of Green Goblin is easily one of the best villains in Spidey's arsenal.  </p>
              </div>
              
              {/* Review Input */}
              <textarea className='input_style2' type="text" onChange={(e) => {
                    setNewReview(e.target.value);
                  }} />

              <div class= "buttons-container">
                {/* update button */}
                <button class="update-button" onClick={() => {
                  updateReview(val.movieName)
                }} >Update</button>
                    &nbsp; &nbsp;
                  
                {/* delete button */}
                <button onClick={() => {
                  deleteReview(val.movieName)
                }} class="delete-button">Delete</button>
            </div>
            <br /><br />
        </div>
      </div>
      {/*  */}

    </div>
  )
}

export default App
