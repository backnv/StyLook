export default class HandlerTelegram{

    send (forma, photos, text){

        let fd = new FormData(forma);


        async function aaa (){

        }
        for (let i = 0; i < photos.length; i++) {
            fd.delete("document")
            fd.append("document", photos[i].filePhoto);
            fd.append("caption", text);


            sendTelegramm();
            console.log("otpravka")

        }


       async  function sendTelegramm (){
            const fetchResp = await fetch(
                `https://api.telegram.org/bot5934482844:AAGU26cJ7_w5jU-axlGZvhurlG_jy9ZGsS4/sendDocument?chat_id=-840112292`, {
                    method: "POST",
                    body: fd,
                }
            )
                .then((res) => res.json())
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }



        console.log("asd")
    }




}
