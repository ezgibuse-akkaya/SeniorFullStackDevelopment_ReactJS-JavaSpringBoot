package com.isikezgibuse.seniorfullstack1.exception;
    /*
    100–199 (Bilgi Kodları)
    200–299 (Başarı Kodları)
    300–399 (Yönlendirme Kodları)
    400–499 (Client Hata Kodları)
    500–599 (Server Hata Kodları)
    * */

    // My Special Exception
    public class EzgiBuseIsikException extends RuntimeException{

        //constructor(parametreli costructor)
    public EzgiBuseIsikException(String  message) {
        super(message);
    }//end costructor
}//end class
