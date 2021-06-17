function testVariable() {
        var strText = document.getElementById("name").value;          
        var strText1 = document.getElementById("phone").value;
        var strText2 = document.getElementById("pickuplocation").value;
        var strText3 = document.getElementById("pickuptime").value;
        var strText4 = document.getElementById("droplocation").value;
        var strText5 = document.getElementById("cars").value;	
        var strText6 = document.getElementById("ser").value;	
        var strText7 = document.getElementById("pickupdate").value;	
        var result = 'Customer Name:  '+strText + '%0APhone Number: ' + strText1+'%0APickup Location: ' + strText2+'%0APickup Date: ' + strText7+'%0APickup Time: ' + strText3+'%0ADrop Location: ' + strText4+'%0ACars: ' + strText5+'%0AService: ' + strText6;
        //document.getElementById('spanResult').textContent = result;
        var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText5=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1727245871:AAGN3JhQnSKQLltGHmtP71eIoL1Ytrk0hOo/sendMessage?chat_id=-1001434497187&text='+result;

request.open("post", url);

request.send();
          alert("Booking Confirmed");
            //window.open('https://intercityriders.com/bookingSuccess.html', '_self');
        }

});

    }
