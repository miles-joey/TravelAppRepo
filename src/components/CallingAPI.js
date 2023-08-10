const CallingAPI = () => {
    return (
        <section>
            <p>TEST</p>
        
    const url = new URL('https://restcountries.com/v3.1/all');

    url.search = new URLSearchParams({
        // no key needed do i need this?
    })

</section>
    )
}

//https://restcountries.com/#api-endpoints-using-this-project
//api website above

// more info
//REST COUNTRIES
// You can access API through https://restcountries.com/v3.1/all but in order to get a faster response, you should filter the results by the fields you need. Like
// https://restcountries.com/v3.1/all?fields=name,flags
export default CallingAPI;