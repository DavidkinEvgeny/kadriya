import Item from '../Item';


export default function Catalog({services, name, price, nameClass}) {

  return(
    <section className={nameClass}>
      <h3>{name}</h3>
      <ul>
        {services.map(service => {
          return(
            <Item key={service.id} service={service} price={price} />
          )
        })}
      </ul>
    </section>
  )
}