import React, {Component} from 'react';
//conecta o componente com os estados do redux
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ProductList } from './styles';
import {MdAddShoppingCart} from "react-icons/md";

class Home extends Component {
  state = {
    products: [],
  }


  async componentDidMount() {

    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({products: data});
  }

  handleAddProduct = product => {
    //dispatch serve para disparar uma action ao redux
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    })
  }
// <ProductList>
// { products.map(product => (
//     <li key={product.id}>
//       <img
//           src={product.image}
//           alt={product.title}
//       />
//       <strong>
//         {product.title}
//       </strong>
//       <span>{product.priceFormatted}</span>
//
//       <button type="button" onClick={() => this.handleAddProduct(product)}>
//         <div>
//           <MdAddShoppingCart size={16} color="#FFF"/> 3
//         </div>
//
//         <span>ADICIONAR AO CARRINHO</span>
//       </button>
//     </li>
// ))}
//
// </ProductList>


  render(){
    const { products } = this.state;
    return (
        <ProductList>

          {products.map(product => (
              <li key={product.id}>
                <Card  style={{display: 'flex', flexDirection: 'column'}} >
                  <CardActionArea>
                    <CardMedia
                        style={{height: 0, paddingTop: '90.25%'}}
                        image={product.picture}
                    />
                    <CardContent>
                      <strong className="main-strong">
                        {product.title}
                      </strong>
                      <br/>
                      <span className="main-span">{product.priceFormatted}</span>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>

                    <button className="main-btn" type="button" onClick={() => this.handleAddProduct(product)}>
                      <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                      </div>

                      <span>ADICIONAR AO CARRINHO</span>
                    </button>
                  </CardActions>
                </Card>
              </li>
          ))}
        </ProductList>
    );
  }


}

export default connect()(Home);
