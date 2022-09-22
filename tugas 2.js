const mtk = 50
const bahasaIndonesia = 50
const bahasaInggris = 50
const ipa =  50

const mapel = [mtk, bahasaIndonesia, bahasaInggris, ipa];

const rata = (arr) => {
  let aver = arr.reduce((a, b) => a + b) / arr.length;
             
  if (aver >= 90) {
  
    console.log(`Nilai rata-rata: ${aver}, grade: A`);
  
  } else if (aver >=80 && aver <=89){
  
    console.log(`Nilai rata-rata: ${aver}, grade: B`);
  
  } else if (aver >=70 && aver <=79){
  
    console.log(`Nilai rata-rata: ${aver}, grade: C`);
  
  } else if (aver >=60 && aver <=69){
  
    console.log(`Nilai rata-rata: ${aver}, grade: D`);
  
  } else if (aver < 60){
  
    console.log(`Nilai rata-rata: ${aver}, grade: E`);
  }
};

rata(mapel);
