export default function contarOvejas(ovejas) {
  return ovejas.filter(item => 
    item.color === 'rojo' && item.name.toLowerCase().includes('n') && item.name.toLowerCase().includes('a')
 )
}
