package com.isikezgibuse.seniorfullstack1.utils.profiles;

import org.springframework.stereotype.Component;

// Spring nesnesi olmasını sağlamak için
@Component
public interface IChooiceProfile {

    public String message(String name);
}
