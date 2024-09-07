import { createContext, useEffect, useState } from 'react';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.jpg';
import b3 from '../../assets/b3.jpg';
import b4 from '../../assets/b4.jpg';
import b5 from '../../assets/b5.jpg';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import s5 from '../../assets/s5.jpg';
import s6 from '../../assets/s6.jpg';
import s7 from '../../assets/s7.jpg';
import s8 from '../../assets/s8.jpg';
import sa1 from '../../assets/sa1.jpg';
import sa2 from '../../assets/sa2.jpg';
import sa3 from '../../assets/sa3.jpg';
import sa4 from '../../assets/sa4.jpg';
import sa5 from '../../assets/sa5.jpg';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import pa1 from '../../assets/pa1.jpg';
import pa2 from '../../assets/pa2.jpg';
import pa3 from '../../assets/pa3.jpg';
import pa4 from '../../assets/pa4.jpg';
import pa5 from '../../assets/pa5.jpg';
import n1 from '../../assets/n1.jpg';
import n2 from '../../assets/n2.jpg';
import n3 from '../../assets/n3.jpg';
import n4 from '../../assets/n4.jpg';
import n5 from '../../assets/n5.jpg';

const food =[
   {id: '0', name:'Greek Salad' , image: s1, price: 200 , description: 'Made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives ', category:'Salad'},
   {id: '1', name:'Udon' , image: n2, price: 1567, description: 'Thick wheat noodles, made with flour, water, and salt.', category:'Noodles'},
   {id: '2', name:'Caesar Salad' , image:s3 , price: 300 , description: ' green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, eggs', category:'Salad'},
   {id: '3', name:'Margherita' , image:p1 , price:300 , description: 'Fresh tomatoes, mozzarella, basil, olive oil.', category:'Pizza'},
   {id: '4', name:'Pesto Pasta' , image: pa5, price:200 , description: 'Pasta, basil pesto, Parmesan cheese, pine nuts, garlic.', category:'Pasta'},
   {id: '5', name:'Broccoli Salad' , image:s4 , price:250 , description: 'One of the types of healthy salads or veg salad is Broccoli. ', category:'Salad'},
   {id: '6', name:'Reuben' , image:sa4 , price: 600 , description: 'Corned beef, Swiss cheese, sauerkraut, Russian dressing, rye bread.', category:'Sandwiches'},
   {id: '7', name:'Green Salad' , image: s5, price:290 , description: ' salad is composed of green leafy vegetables like lettuce and spinach.', category:'Salad'},
   {id: '8', name:'Chow Mein' , image:n5 , price:4000 , description: 'Chinese stir-fried egg noodles, crunchy or soft.', category:'Noodles'},
   {id: '9', name:'Potato Salad' , image:s6 , price:500 , description: 'Potato salad is made from boiled potatoes, usually containing a dressing and a variety of other ingredients .', category:'Salad'},
   {id: '10', name:'Pepperoni' , image:p3 , price:3100 , description: 'Tomato sauce, mozzarella, pepperoni slices.', category:'Pizza'},
   {id: '11', name:'Fruit Salad' , image:s8 , price:600 , description: 'This fruit salad is juicy, crunchy, and most importantly healthy! ', category:'Salad'},
   {id: '12', name:'Ramen' , image:n1 , price: 2000 , description: ' Japanese wheat noodles with alkaline water', category:'Noodles'},
   {id: '13', name:'Kolkata Biryani' , image:b4 , price:490 , description: ' Basmati rice, marinated meat, potatoes, fried onions, saffron.', category:'Biryani'},
   {id: '14', name:'Penne Arrabbiata' , image: pa3, price:700 , description: 'Penne, tomato sauce, garlic, red chili flakes, parsley.', category:'Pasta'},
   {id: '15', name:'Glass Noodles' , image:n4 , price:6500 , description: 'Transparent noodles made from mung bean starch.', category:'Noodles'},
   {id: '16', name:'Sindhi Biryani' , image:b3 , price:200 , description: 'Basmati rice, spicy beef or mutton, potatoes, tomatoes, yogurt.', category:'Biryani'},
   {id: '17', name:'Spaghetti Carbonara' , image:pa1 , price:1090 , description: ' Spaghetti, eggs, pancetta, Parmesan cheese, black pepper.', category:'Pasta'},
   {id: '18', name:'Hawaiian' , image:p2 , price:280 , description: 'Tomato sauce, ham, pineapple, mozzarella.', category:'Pizza'},
   {id: '19', name:'Veggie' , image: p4, price:4500 , description: 'Tomato sauce, mozzarella, bell peppers, olives, onions.', category:'Pizza'},
   {id: '20', name:'Chickpea Salad' , image: s7, price:530 , description: 'This salad is jam-packed with color and flavor thanks to crisp, green cucumbers, fresh herbs, avocado, and juicy tomatoes.', category:'Salad'},
   {id: '21', name:'BLT (Bacon, Lettuce, Tomato)' , image:sa2 , price:2400 , description: 'Crispy bacon, lettuce, tomato, mayonnaise, toasted bread.', category:'Sandwiches'},
   {id: '22', name:'Lucknowi Biryani' , image: b2, price: 600, description: ' Basmati rice, tender lamb, aromatic spices, yogurt, saffron.', category:'Biryani'},
   {id: '23', name:'Soba' , image: n3, price: 2345, description: ' Thin noodles made from buckwheat and wheat flour.', category:'Noodles'},
   {id: '24', name:'Chicken Biryani' , image: b5, price:840 , description: 'Basmati rice, chicken, yogurt, spices, onions, cilantro.', category:'Biryani'},
   {id: '25', name:'Fettuccine Alfredo' , image:pa2 , price:380 , description: ' Fettuccine, cream, butter, Parmesan cheese, garlic.', category:'Pasta'},
   {id: '26', name:'Lasagna' , image:pa4 , price:500 , description: ' Lasagna sheets, ground beef, ricotta, mozzarella, marinara sauce.', category:'Pasta'},
   {id: '27', name:'4 Cheeze' , image:p5 , price: 5000, description: 'Mozzarella, parmesan, gorgonzola, ricotta.', category:'Pizza'},
   {id: '28', name:'Club Sandwich' , image:sa1 , price:5600 , description: 'Turkey, bacon, lettuce, tomato, mayonnaise, toasted bread.', category:'Sandwiches'},
   {id: '29', name:'Grilled Cheese' , image:sa3 , price:1500 , description: 'Melted cheese, buttered bread, grilled until cri', category:'Sandwiches'},
   {id: '30', name:'Hyderabadi Biryani' , image:b1 , price:400 , description: 'Basmati rice, marinated chicken, saffron, yogurt, fried onions.', category:'Biryani'},
   {id: '31', name:'Philly Cheesesteak' , image:sa5 , price:890 , description: 'Sliced beef, melted cheese, sautéed onions, hoagie roll.', category:'Sandwiches'},
   {id: '32', name:'Caprese Salad' , image: s2, price:180 , description: 'Made with sliced mozzarella, sliced tomatoes, sweet basil, olive oil, Salt', category:'Salad'}
]

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

const [cartItems, setCartItems] = useState({ });
const url = "http://localhost:4000";
const [token,setToken]= useState(localStorage.getItem('token') || '');
//const [food_list, setFoodList] = useState([])

const addToCart = (id) =>{
    if(!cartItems[id]){
        setCartItems((prev) => ({...prev, [id]:1}))
        console.log(id)
    }else{
        setCartItems((prev)=>({...prev, [id]:prev[id]+1}))
        console.log(id)
    }
}

const removeFromCart = (id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
}

const getTotal=()=>{
    let total=0;
    for(const item in cartItems){
        if (cartItems[item]>0){
            let itemInfo=food.find((product)=>product.id===item);
        total +=itemInfo.price*cartItems[item];
        }       
    }
    return total;
}



useEffect(() => {
    

  }, [token]);

    const contextValue = {
        food,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotal,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;