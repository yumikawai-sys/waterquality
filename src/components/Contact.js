function Contact()
{
    return(
        <>
            <main className="contactmain"> 
                <br/>
                <h1 className="contactone"> Questions? </h1>   
                <h3 className="contactone">Please take a moment to fill out the form below</h3>            

            </main>
            <div className="contacttext">
                <h2 id="h2yellowletter">We Like to Hear from You</h2>
                <form id="formcontact" action="https://httpbin.org/post" method="post" style={{border:0}}>
                    <table class="contacttable" style={{border:1}}>
                    <tr>
                    <td id="emailtext"><text>Email </text></td>
                    <td><input id="contactmail" type="email" placeholder="xxx@email.com" required maxLength="30"></input></td>
                    </tr>
                    <tr>
                    <td id="messagetext"><text>Message </text></td>
                    <td><input id="contactmessage" type="text" required maxLength="100" rows="10"></input></td>
                    </tr>
                    <tr>
                    <td colspan="2" id="sendbutton"><button id="sbutton">SEND</button></td>
                    </tr>
                    </table>
                </form>
            </div>
            <footer><p>N.S. Water Safe Ltd. 2023</p></footer>
        </>
    )
}

export default Contact;