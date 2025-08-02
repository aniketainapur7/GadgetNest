import '.././ProductMarquee.css'

const products = [
  { id: 1, name: 'Nova X1', image: 'src/assets/smartphones/iphone.png' },
  { id: 2, name: 'Nova Elite Watch', image: 'src/assets/smartwatch/blackwatch.png' },
  { id: 3, name: 'Pulse Headphones', image: 'src/assets/earbuds/blackearbuds.png' },
  { id: 4, name: 'Nova Phone Pro', image: 'src/assets/smartphones/moto.png' },
  { id: 5, name: 'Nova X Ultra', image: 'src/assets/smartphones/iphone.png' },
  { id: 6, name: 'Nova Vision Watch', image: 'src/assets/smartwatch/blackwatch.png' },
  { id: 7, name: 'Pulse Max Buds', image: 'src/assets/earbuds/blackearbuds.png' },
]

const ProductMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...products, ...products].map((product, index) => (
          <div className="marquee-item" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductMarquee
