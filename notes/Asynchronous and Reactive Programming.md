# Sync & Async

  **Sync** yapılan işlem adımlarının sırası ile yapılmasıdır. Bu işlem sırası tanımlanan her bir işlem adımlarının tamamlanması sonucunda bir sonraki adıma geçmesi şeklinde gerçekleşir.
  
> * Bir kahveciden kahvenizi aldınız ve çıktınız. Belirli bir süre sonra kahvenizden ilk yudumu aldığınızda şeker ve süt eklenmediğini farkettiniz. Bu durumda kahveciye dönerek yeni bir kahve siparişi vermeli ve tüm süreci yeniden işletmelisiniz.
> * Bir kahvecide kahve alma sırasına girdiniz. Kahvenizi alıncaya kadar başka bir iş yapamazsınız. Telefonuza bakamaz, tweet atamazsınız. Belki de o tweet ile dünyayı kurtaracaktınız. Kim bilebilir?
  
  **Async**, sync gibidir fakat işlem adımlarında belirlenen işlemlerin çalışma sırasının dışına çıkarak işlem sırasından bağımsız bir şekilde çalışmasıdır.

# Asynchronous Programming
  Aklınıza dünyanın en saçma çalışan restoranını getirin dediğimde aklınıza gelecek olan şeylerden bir tanesi de **sadece bir aşçı** ve **bir garsonun** çalıştığı ve bir müşterinin siparişi kendisine servis edilmeden başka insanların siparişlerinin **ALINMADIĞI** bir yer olacaktır. Böyle bir restoran gerçekte var olsa, başlarına gelmedik kalmazdı herhalde. Eğer aşçının yemeği bitirmesi 30 dakika alacaksa, bizim garson bu süre boyunca **hiçbir iş yapmadan boş boş bekleyecek** demektir.

  İlk adım olarak garsonun beklememesini sağlamak lazım. Beklememesi demek: Bir siparişi hazırlanması için aşçıya verdikten sonra, hazırlanması sırasında kendisi diğer müşteriler ile ilgilenebilir, masaları temizleyebilir ya da gerekli herhangi bir işle uğraşabilir. Tamam, bu fena bir çözüm olmadı. **İşte bu noktada artık async düşünmeye başladık demektir.** Yemeğin hazırlanma süreci bizim garsonu artık bloklamıyor yani onu bekletmiyor.

  Async programming bir implementasyonu değil, bir davranışı tanımlar. Bu davranışın nasıl implement edileceği ise değişir.
  
<hr>
  Yazılım dediğimiz serüven en nihayetinde; veriyi bir yerden alıp, bir şekilde işleyip, bir yere taşıyıp, bir yere yazmak değil midir Dolayısıyla nihayetinde veriyi elde etme ve işleme ortamlarımız arasında **bir senkronizasyona**, **kaliteli ve tutarlı işlem yapma becerisine** ihtiyacımız bulunmaktadır.
  
  Günümüzde çok yaygın olan ve ana akım olarak adlandırabileceğimiz programlama dillerinin bir çoğu **procedural programlama** temelinde çalışmaktadır.Bu yaklaşım ya da paradigmaya sahip olan dillerde yazılımcı; problemin çözüm aşamalarını detaylıca **adım adım kodlar**, makineler ise adım adım bu aşamaları çalıştırarak veriler işlenir ve sonucu üretirler. **Burada yazılan kod odak noktasını kaybetmez.** Yani sadece üzerine aldığı işi bitirmeye odaklanmıştır. Oluşturulan kod yapısı ardışıl olarak oluşturulmuş aşamalara ve sürecin sonuna odaklanmıştır ve sarsılmaz bir şekilde bu süreç işlemektedir. Eğer ki, bu ardışıl yapıdaki sürece farklı bir değer katılmaya çalışırsa yapı buna müsaade etmeyecek, sıralama ya baştan yapılması gerekecek ya da tüm çalışmalar geri alınarak(callback) hesap tekrardan uygulanacaktır.
  
> * Kod akışının sırayla işlemediği, işlemlerin birbirini beklemediği, kod akışının işlem durumlarına göre devam ettiği programlamaya **Asynchronous Programming** denir.
> * Async programlama dendiğinde aklınıza gelen şey yeni threadlerin oluşturulması değil, uzun bir işin bitmesini beklemeden bu işin sonucuna bağımlı olmayan diğer işlere devam edebilmek… bağımlı olan işleri ise beklenen işe bir devam şeklinde ekleyebilmek olmalı.

## Events & Stream
  Reactive programlamada olaylar(events) gelecekte oluşabilecek herhangi bir işlem ya da işlem isteği olarak düşünülebilir. Bu olaylar, bir web uygulamasında bir fare tıklaması, çift tıklama, fareyle üzerine gelme veya herhangi bir klavye eylemi olabilir.Tek sayfalı uygulamalar(single page applications) yoğun bir şekilde olay ağırlıklıdır.
  
  Genelde programlar birden fazla olayı(event) ele aldıklarından bu olaylar bir dizi gibi düşünülebilirler. Bu olaylar dizisine **stream of events** denir. Reactive programlama stream’ler üzerine kuruludur.
  Reactive bir uygulama programlanırken hemen hemen her şeyden; kullanıcı işlemleri, HTTP istekleri, alınan mesajlar, verilecek mesajlar, bildirimler, bir değişkendeki değişiklikler, cacheleme olayları, database işlemleri; değişebilecek ve oluşabilecek her şey için veri akışları oluşturulur.
  
  > * Kahvecide beklerken twitter akışını takip etmek kahve alma stream’i içerisinde yan bir olaydır. Buradan hareketle Reactive programlamada bu akışlar --stream of events-- aynı anda sürekli olarak gözlenir/izlenir ve bir değer değişiminde direkt olarak tepki verilir ve sıradaki gerekli işlem gerçekleştilir.
  > * Reactive programlamada tüm mesele streamler üzerinden veriyi olay bazlı(event-driven) olarak yönetmekten geçer.

# Reactive Programming
  Günümüzde kullanıcılar milisaniyeler içerisinde bir yanıt ve %100 erişilebilirlik talep etmekteler. Veriler petabayt cinsinden ölçülmekte. Dahası öyle bir noktadayız ki, iki makine senkronize halde bir işlemi yaparken üçüncü bir işlemi yapma ihtiyacı ortaya çıkabilmekte ya da üçüncü bir makine diğer iki makineyi buna zorlamaktadır. Uzun lafın kısası bugünün ihtiyaçları dünün yazılım mimarileriyle karşılanamamakta.
  Kodun akış sürecinde olası yan etkileri anında ya da sürecin herhangi bir **T** noktasında işleme alabilecek şekilde yapılan tasarımlara sahip uygulamalara ya da kod parçacıklarına **Reactive** denir. 
  Burada, prosedurel programlamadakinden reactive uygulamaları ayıran en mühim fark, adım adım kod takip etmek yerine **stream**'lere abone olarak **event**'lere tepki vererek ilerlerlemesidir.
  
> * Reactive programlama, dışarıdan gelen uyarılara karşı tepkiye girerek programın ilerleyişini şekillendirir.
> * Reactive programlama, kullanıcıya donma, kitlenme ve yavaşlama olmadan akıcı bir uygulama kullanma deneyimi sunmayı hedefler.
> * Reactive programlama, aynı anda birden çok olayı takip ederek aksiyona girebilmeyi ve anlık oluşan olaylara çok hızlı tepkiler vermeyi hedefler.
> * Günümüz modern uygulamaların birçoğunu çok kullanıcılı ve büyük hacimli verileri hızlı ve kararlı bir şekilde işleyebilecek ve çok sayıda eşzamanlı isteği karşılayabilecek yapıda olması gerekiyor. Reactive programlama bunu hedefleyen bir paradigmadır.

```
y + z = x
```
> * Yukarıdaki işlemde 'y' değişkeninin değeri ile 'z' değişkeninin değeri toplanıp 'x' değişkenine atanmaktadır.
> * Eğer ki, **procedural programlama** mantığında hareket ederseniz, süreçte 'y' veya 'z' değişkenlerinden birinin değeri değişirse bu değişiklik 'x' değişkenine yansımayacaktır.
> * Çünkü ardışıl işlem sıralamasında 'x' değişkeninin değeri çoktan belirlenmiştir ve artık bu değer 'y' ve 'z' değerlerinden bağımsızdır.
> * Reactive programlamada ise 'y' ve 'z'  değişkenlerinin değeri değiştiğinde 'x' değişkeninin değeri de bu değişime göre şekillenecektir.

# The Reactive Manifesto
> * Reactive mimariye sahip uygulamalar ya da sistemler **Responsive**, **Resillent**, **Elastic** ve **Message Driven** olmalıdır.

1. **Responsive**
	-   Reactive bir uygulama mümkün olan en anlamlı sürede yanıt vermelidir. Responsive, işe yarar ve kullanışlı bir sistem demektir.
	-   Responsive sistemler, tutarlı bir hizmet kalitesi sunmak için güvenilir üst sınırlar oluşturarak hızlı ve tutarlı yanıt süreleri sağlamaya odaklanır.
	-   Bu tutarlı davranış, hata işlemeyi basitleştirir, son kullanıcı güvenini oluşturur ve daha fazla etkileşimi teşvik eder.
2. **Resillent**
	-   Reactive bir uygulama hata anında da responsive’dir. Resillent olmayan her sistem arıza durumunda duyarsız kalacaktır.
	-   Sistem bileşenlerinin birbirlerinden izole edilmesi; sistemin parçalarının arızalanması durumunda sistemin tamamını etkilemeden arızalanan bileşenlerin onarılabilmesini sağlar.
	-   Bu sistemler arızalara karşı çok daha toleranslı olmakla beraber arıza oluştuğunda felakete dönüşmesini önleyecek şekilde onunla zarifçe başa çıkarlar.
3. **Elastic**
	-   Reactive sistemler, değişen iş yükü altında yanıt vermeye devam eder.
	-   Reactive sistemler, girdi hızındaki değişikliklere,  gerektiğinde kaynakları artırarak ya da azaltarak uygulamadaki hareketliliği yönetecek şekilde tepki verebilirler.
	-   Reactive sistemler örneğin X ,Y, Z servislerinden sadece Z’ye gelen yük artıyor ise bu yük dağılımını yöntecek bir tasarıma sahip olmalı.

</hr>
Kaynak: https://atarikguney.medium.com/asenkron-asynchronous-programlama-nedir-296230121f9d
</br>
Kaynak: https://tr.linkedin.com/pulse/synchronous-asynchronous-programlama-m%C3%BCcahit-bayraktar
</br>
Kaynak: https://kimkorkarjavadan.com/2018/02/23/reactive-programming-1-reactive-programlama-nedir/
</br>
Kaynak: https://www.gencayyildiz.com/blog/reactive-programming-nedir/
</br>
Kaynak: https://www.reactivemanifesto.org/
