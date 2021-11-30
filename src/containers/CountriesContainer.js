import CountriesList from "../components/CountriesList";
import {useState, useEffect} from 'react';
import '../App.css';


const CountriesContainer = () => {

    const [countries, setTasks] = useState([]);

    //fetching data from database
    const getTaskData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setTasks(data))
    }

    useEffect(getTaskData, []);

    
   

    return(
        countries.length >0?

        <>  <header>
            <div class="inner">
            <div class="logo">
           
                    <h1 className = "name">"WEBSITE"</h1>
             
            </div>
            </div>
         
            </header>
            <CountriesList countries={countries}/>
            
  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>"WEBSITE"</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
       <p className="Rights">Ⓒ2021 LH. All rights reserved.</p>
  </footer>
            {/* <footer className="footer">
                <div className="container"> </div>
                    <div className="row"> </div>

                        <div className="footer-col"> 
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">get help</a></li>
                        </ul>
                        </div>

                    <div className="footer-col"> 
                        <h4>FOLLOW US</h4>
                        <div className="social-links">
                            <a href="#"></a>
                        </div>
                    </div>
        


            </footer> */}
        </>
        :
        <p>loading...</p>
    )



}

export default CountriesContainer;

