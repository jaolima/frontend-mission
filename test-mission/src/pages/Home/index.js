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

getUsers = (p) => {
    const {handleAddProduct, productsCart} = this.props
        handleAddProduct(p);
    console.log('teste', productsCart)
}

  render(){
    return (
        <ProductList>
          {this.props.products.map(product => (
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

                    <button className="main-btn" type="button" onClick={() => this.getUsers(product)}>
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
