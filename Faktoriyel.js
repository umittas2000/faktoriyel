//Verilen sayinin faktoriyelini hesaplayan kod parcasi
//Kural 1: girilen deger bir sayi olmali
//Kural 2: Girilen sayi 1 ile 25 arasinda bir sayi olmali

function FaktoriyelHesapla(sayi)
{
    
    if(Number.isInteger(sayi)){
        if(sayi>0 && sayi<26){
            yeni_sayi=sayi;
                for(i=sayi-1;i>1;i--){
                    console.log("yeni_sayi: "+yeni_sayi+" * "+i);
                    yeni_sayi *=i;
                }
        }else{
            return "Lutfen 1 ile 25 arasi bir sayi girin!";
        }
    }else{
        return "Lutfen Bir sayi giriniz!";
    }

    return yeni_sayi;
}

console.log(FaktoriyelHesapla(8));

