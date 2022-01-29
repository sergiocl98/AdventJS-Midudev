export default function listGifts(letter) {
 let carta = letter.split(/\s+/).map(item => item.trim()).filter(item => item && item[0]!== '_')
 let regalos = {}
 carta.map(item=>{
     regalos.hasOwnProperty(item) ? regalos[item]+=1 : regalos[item]= 1;
 })
 return regalos;
}
