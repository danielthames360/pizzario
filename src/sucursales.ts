export interface Sucursal {
    name: string;
    address: string;
    phone?: string;
    hours: string;
    days: string;
    distance?: number;
    latitude: number;
    longitude: number;
    ciudad: string;
}


export const sucursales: Sucursal[] = [
    {
        name: "Sucursal Villa 1ero de mayo",
        address: "Frente a la plaza de la Villa primero de mayo, Santa Cruz",
        phone: "78012393",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7951413,
        longitude: -63.134445,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal San Aurelio",
        address: "Av. San Aurelio entre 2do y 3er anillo, Santa Cruz",
        phone: "77012768",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8000007,
        longitude: -63.1680465,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Melchor Pinto",
        address: "Av. Melchor Pinto entre 1er y 2do anillo, Santa Cruz",
        phone: "77026938",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7824031,
        longitude: -63.1676075,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Blacutt",
        address: "Calle René Moreno frente a la plazuela Blacutt, Santa Cruz",
        phone: "69013211",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7942094,
        longitude: -63.1801055,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Mutualista",
        address:
            "Av. mutualista entre segundo y tercer anillo calle los mapajos, Santa Cruz",
        phone: "77304620",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7693019,
        longitude: -63.1671098,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Santos Dumont",
        address: "Av. Santos Dumont entre 3er y 4to anillo, Santa Cruz",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8180376,
        longitude: -63.1838181,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Pampa de la isla",
        address: "Av. Virgen de cotoca 6to anillo, Santa Cruz",
        phone: "78462865",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.768754,
        longitude: -63.117596,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Alemana",
        address: "Av. Alemana entre 3er y 4to anillo, Santa Cruz",
        phone: "69006395",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7552087,
        longitude: -63.1655194,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Piraí",
        address: "Av. Pirai entre 2do y 3er anillo, Santa Cruz",
        phone: "76327440",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7908805,
        longitude: -63.1968085,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Plan 3000",
        address: "Av. Paurito pasando la Av. TranSCZontinental, Santa Cruz",
        phone: "77387397",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8369842,
        longitude: -63.1277421,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Santos Dumont 5to anillo",
        address: "Av. Santos Dumont 5to anillo, Santa Cruz",
        phone: "77303391",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8341703,
        longitude: -63.1846459,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Beni",
        address: "Av. Beni entre 3er y 4to anillo, Santa Cruz",
        phone: "76380990",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7573762,
        longitude: -63.1732615,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Equipetrol",
        address: "Barrio Equipetrol Calle 9 Oeste, Santa Cruz",
        phone: "75358717",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7686796,
        longitude: -63.1997761,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal BuSCZh",
        address: "Av. Bush sobre el tercer anillo interno, Santa Cruz",
        phone: "76380983",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7717142,
        longitude: -63.2027029,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Radial 27",
        address: "Av. Radial 27 entre 5to y 6to anillo, Santa Cruz",
        phone: "77827722",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7375226,
        longitude: -63.1726112,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Banzer",
        address: "Av. Banzer 7mo anillo, Santa Cruz",
        phone: "75500462",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.7254271,
        longitude: -63.1650449,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Doble vía la guardia",
        address: "Av. Doble vía la guardia entre 6to y 7mo anillo, Santa Cruz",
        phone: "62120288",
        hours: "09:30 AM - 06:30 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8262037,
        longitude: -63.2248307,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Sevilla",
        address: "Av. Banzer Km.10 La esquina de Sevilla, Santa Cruz de la Sierra",
        phone: "62246930",
        hours: "15:00 PM - 22:00 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.6817331,
        longitude: -63.1494184,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Lujan",
        address: "Av. Virgen de Luján, Santa Cruz de la Sierra",
        phone: "62240413",
        hours: "15:00 PM - 22:00 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.6817331,
        longitude: -63.1494184,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal Km9",
        address: "Av. Doble vía la guardia km9, Santa Cruz",
        phone: "74160460",
        hours: "15:00 PM - 22:00 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8493242,
        longitude: -63.25094,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal El Quior",
        address: "",
        phone: "",
        hours: "15:00 PM - 22:00 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -17.8484131,
        longitude: -63.081886,
        ciudad: 'SCZ'
    },
    {
        name: "Sucursal San Miguel",
        address: "Calle Claudio Aliaga, Av. Montenegro y, La Paz",
        phone: "75832626",
        hours: "16:00 PM - 22:45 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -16.5426562,
        longitude: -68.080545,
        ciudad: 'LP'
    },
    {
        name: "Sucursal Miraflores",
        address: "Av. Bush, entre Panama y Pasoskanky, La Paz",
        phone: "62014111",
        hours: "15:00 PM - 22:45 PM",
        days: "Lun, Mar, Mie, Jue, Vie, Sab, Dom",
        latitude: -16.4975412,
        longitude: -68.120958,
        ciudad: 'LP'
    },
];