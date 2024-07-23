package com.isikezgibuse.seniorfullstack1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// API'den gelen 401 Hatasını yakalamak
// 401: Yetkisiz Giriş
// 401 Unauthorized:** Kimlik doğrulama gerekli ve doğru kimlik bilgileri sağlandığında erişim izni verilebilir.
// 403 Forbidden:** Kimlik doğrulaması yapılsa bile, istemcinin erişim yetkisi yoktur ve erişim izni verilmez.
@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class Authorized401Exception extends RuntimeException{

    public Authorized401Exception(String message) {
        super(message);
    }
}
