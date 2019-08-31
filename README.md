[Facebook Post](https://www.facebook.com/InfoSecOnGround/posts/1213065468873125?__xts__[0]=68.ARD1U0u53rUniSor1dLEVVP5CvlfizqQ6LNUXG8KOR-zRu1yee8JiYuwgPnwFvfVo09mp8sDautl2XqAXxiWR2OsUcyrX4zEEbcB33Lb5doxV1NkSI6JAqLIS2-L4Q2VK7oClhP_5Qr5u5iUDzmIeuovfNWDFVvYS6MPd5vF5rXL496I4TuSeVMBVqUe007UgrEjwqwqp5k8j1Gj9zu82_MC99tABUbxvGdhBQBzKZVS7tmng4kHy4VIAHT9Zqcsmgq7Eax2RM0F9qK3A06KWHsBeAjnlA4tzlB7D7prPBQFYEDbHXZdJxhkBTBNw-KpShk1pdsQAKqsuyQtaQREdowDpQ&__tn__=-R)

------------
UTC+8 2019-08-31 23:32

有網友[1]發現多個大陸網站（如百度貼吧）入面加入咗啲 code，會令到瀏覽器自動向 #LIHKG 產生大量流量。

初步調查發現疑似 qihucdn 網域會喺特定情況將佢哋 host 嘅 JavaScript 檔加料，似乎大陸好多網站都會用到呢個 #CDN。而唔係每一次 load 都會出事，未知用咩準則。試過好幾次都無事。

類似手法其實喺 2015 年針對 GitHub 嘅大型 #DDoS 攻擊已經用過[2]。

建議大家非必要就唔好上任何大陸網住，以免成為幫兇。尤其已經過咗 CAPTCHA 嗰啲。

p.s.
寫緊呢篇嘅同時，LIHKG 死咗幾下... HTTP502
而家 web 版去 LIHKG 要先喺 CloudFlare 做 CAPTCHA 👍👍

p.s. 唔記得多謝提供資料同埋幫手 deobfuscate 嘅朋友同朋友嘅朋友 🤗

-- 
[1] https://lihkg.com/thread/1522162/
[2] https://www.cloudflare.com/learni…/ddos/famous-ddos-attacks/

-------------
