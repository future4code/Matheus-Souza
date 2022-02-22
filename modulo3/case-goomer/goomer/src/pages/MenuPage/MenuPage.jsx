import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

export const MenuPage = () => {

    const { id } = useParams();
    const [menu, setMenu] = useState({});
    
    const response = useRequestData(`${BASE_URL}/restaurants/${id}/menu`, [])

    const restaurantsData = useRequestData(`${BASE_URL}/restaurants`, [])

    const restaurantDetails = restaurantsData.filter((item)=>{
        return item.id == id
    })

  
    useEffect(() => {
        const fetch = async () => {
            try {
                const menuList = {}

                for (let menuItem of response) {
                    if (!menuList[menuItem.group]) menuList[menuItem.group] = [menuItem]
                    else menuList[menuItem.group].push(menuItem)
                }

                setMenu(menuList)

            } catch (error) {

            }

        }
        fetch();
    }, [response])


    return <div>
      {restaurantDetails.map((restaurant)=>{
          return (
              <div ley={restaurant.name}>
                  <h1>{restaurant.name}</h1>
                  <p>{restaurant.address}</p>
              </div>
          )
      })}
                {Object.keys(menu)?.map((group) => (
                    <Accordion key={group}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{group}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {menu && menu[group].map((menuItem) => <>{menuItem.name}</>)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                ))}

            </div>
}