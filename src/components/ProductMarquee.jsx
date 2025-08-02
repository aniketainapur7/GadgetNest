import '.././ProductMarquee.css'

const products = [
  { id: 1, name: 'Nova X1', image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg' },
  { id: 2, name: 'Nova Elite Watch', image: 'https://fdn.gsmarena.com/imgroot/reviews/21/samsung-galaxy-watch4/lifestyle/-1200/gsmarena_001.jpg' },
  { id: 3, name: 'Pulse Headphones', image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg' },
  { id: 4, name: 'Nova Phone Pro', image: 'https://ivenus.in/wp-content/uploads/2024/09/iPhone_16_Pro_Natural_Titanium_PDP_Image_Position_1__en-IN-scaled.jpg' },
  { id: 5, name: 'Nova X Ultra', image: 'https://i03.appmifile.com/155_item_in/21/01/2025/4ad472e840274ae361beb0ec238cc939.png?thumb=1&f=webp&q=85' },
  { id: 6, name: 'Nova Vision Watch', image: 'https://fdn.gsmarena.com/imgroot/news/23/12/best-smartwatches-of-2023/-1200/gsmarena_001.jpg' },
  { id: 7, name: 'Pulse Max Buds', image: 'https://fdn.gsmarena.com/imgroot/news/19/08/mi-true-wireless-earphones-review/-727w2/gsmarena_005.jpg' },
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
