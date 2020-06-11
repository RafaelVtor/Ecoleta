import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet'
import api from '../../services/api'

import './index.css'

import logo from '../../assets/logo.svg'

interface Item {
  id: number;
  title: string;
  image_url:string;
}

const CreatPoint = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data.serializedItems)
      
    })
  }, []);

  console.log(items)

  return (
    <div id='page-create-point'>
      <header>
        <img src={logo} alt='Ecoleta' />

        <Link to='/'>Voltar para home</Link>
      </header>
      <form action=''>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className='field-group'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' id='email' />
            </div>

            <div className='field'>
              <label htmlFor='whatsapp'>Whatsapp</label>
              <input type='text' name='whatsapp' id='nwhatsapp' />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Edereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-12.9131638, -38.3522319]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[-12.9131638, -38.3522319]} />
          </Map>

          <div className='field-group'>
            <div className='field'>
              <label htmlFor='uf'>Estado (UF)</label>
              <select name='uf' id='uf'>
                <option value='0'>Selecione um UF</option>
              </select>
            </div>
            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <select name='city' id='city'>
                <option value='0'>Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className='items-grid'>
            {items.map(item=>(

              <li key={item.id}>
                <img
                  src={item.image_url}
                  alt='teste'
                  />
                <span>{item.title}</span>
              </li>
                  ))}
          
          </ul>
        </fieldset>

        <button type='submit'>Cadastrar ponto de coleta</button>
      </form>
    </div>
  )
}

export default CreatPoint
