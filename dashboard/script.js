    // var menubar = document.querySelector('.menu-bar')
    // var navbar = document.querySelector('.navbar')
    // var table = document.getElementById("data")

    // menubar.addEventListener('click',()=>{
    //     navbar.classList.toggle('active')
    // })

    // fetch('./data.json')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     let qty = data.length

    //     for (let i = 0; i <qty;i++){
        //     table.innerHTML += `
        //                     <tr>
        //                         <td>${data[i].Customer_Name}</td>
        //                         <td>${data[i].Company}</td>
        //                         <td>${data[i].Phone_Number}</td>
        //                         <td>${data[i].Email}</td>
        //                         <td>${data[i].Location}</td>
        //                         <td>
        //                             <button>${data[i].Status}</button>
        //                         </td>
        //                    </tr>
        //     `
        // }
        
    // })
    // .catch(error => console.error('Error fetching JSON:', error));

   $( document ).ready(()=>{
        $('.menu-bar').click(()=>{
            $('.navbar').toggleClass('active')
        })

        $.getJSON('./data.json',(data)=>{

            let tablecontent = ''
            $.each(data,(index, d)=>{

                tablecontent += `
                            <tr>
                                <td>${d.Customer_Name}</td>
                                <td>${d.Company}</td>
                                <td>${d.Phone_Number}</td>
                                <td>${d.Email}</td>
                                <td>${d.Location}</td>
                                <td>
                                    <button>${d.Status}</button>
                                </td>
                           </tr>
            `
            $('#data').html(tablecontent)
            })

            


            // for()

            // )
        })
   })