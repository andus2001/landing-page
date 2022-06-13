import React from "react"


function App() {
    return (
        <div className="page">
            <h1 id="heading">SPA TREATMENTS</h1>
            <h3 id="subHeading">A Perfumed Spa Experience For Mind And Body: Renaissance</h3>
            <div className="imageContainer">
                <div>
                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/b013ebfa317a54698a2d9f76/high-angle-view-woman-receiving-facial-mask-beauty-salon_23-2147939942.jpg?version=" alt='facial'></img>
                
                    <div id="facial">
                        <h3 id="heading">Facial spa treatment</h3>
                        <h4><span>$65.00 </span>- 60 Minute Voucher</h4>
                        <p className="subHeading">Radiate confidence with this deeply beneficial facial massage.</p><br/>
                        <button onClick={()=>alert(`Sorry, not working yet...`)}>Book Now</button>
                    </div></div>
                <div>
                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/02d08174d66a531998752b2b/beautiful-young-woman-spa-salon_155003-3473.jpg?version=" alt="back massage"></img>
                    <div id="facial">
                        <h3 id="heading">Back Massage</h3>
                        <h4><span>$125.00 </span>- 60 Minute Voucher</h4>
                        <p className="subHeading">This calming massage is a blend of strokes, stretch and acupressure.</p><br/>
                        <button onClick={()=>alert(`Sorry, not working yet...`)}>Book Now</button>
                    </div>
                </div>
            </div>
                    <div className="textOverlay1"></div>
                    <div className="imageContainer2">
                        <div id="img1">
                            <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ec4d11f9fd85595195be14ef/woman-relaxing-during-spa-treatment_1098-3158.jpg" alt="thai stone"></img>
                            <div id="facial">
                        <h3 id="heading">Thai Stone massage</h3>
                        <h4><span>$75.00 </span>- 70 Minute Voucher</h4>
                        <p className="subHeading">This is the treatment your muscles have been craving.</p><br/>
                        <button onClick={()=>alert(`Sorry, not working yet...`)}>Book Now</button>
                    </div>
                        </div>
                        <div>
                            <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ac8a4a4140c35dcd98192f22/foot-massage-woman-spa_144627-2086.jpg" alt="thai foot"></img>
                            <div id="facial">
                        <h3 id="heading">Thai Foot Massage</h3>
                        <h4><span>$65.00 </span>- 60 Minute Voucher</h4>
                        <p className="subHeading">Reflexology is the systematic application of pressure techniques to the feet and hands.</p><br/>
                        <button onClick={()=>alert(`Sorry, not working yet...`)}>Book Now</button>
                    </div>
                        </div>
                    </div>
                    

                </div>
            
        

    )
}

export default App