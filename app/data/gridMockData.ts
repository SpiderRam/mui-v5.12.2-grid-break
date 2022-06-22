import type { GridColumns, GridRowsProp } from '@mui/x-data-grid-premium'

type DataProps = {
    vendorName: string,
    internalId: string,
    pmgId: number,
    email: string,
    accountNumber: number,
    status?: string,
    id?: string,
    details: {
        address?: string,
        city?: string,
        state?: string,
        phone?: string,
        payee?: string,
        id?: number,
    }[]
}

export const nestedColumns: GridColumns = [
    {
        field: 'address',
        headerClassName: 'basicGridHeader',
        headerName: 'Address',
        flex: 1,
        sortable: false
    },
    {
        field: 'city',
        headerClassName: 'basicGridHeader',
        headerName: 'City',
        flex: .5,
        sortable: false
    },
    {
        field: 'state',
        headerClassName: 'basicGridHeader',
        headerName: 'State',
        flex: .3,
        sortable: false
    },
    {
        field: 'phone',
        headerClassName: 'basicGridHeader',
        headerName: 'Telephone',
        flex: 1,
        sortable: false
    },
    {
        field: 'payee',
        headerClassName: 'basicGridHeader lastColumnHeader',
        headerName: 'Payee',
        flex: 1,
        sortable: false
    }
]

const vendorGridData = [
    {
        'vendorName': 'Talae',
        'internalId': '629136f0f3b4da14d23248e8',
        'pmgId': 1397769,
        'email': 'johnstonspence@talae.com',
        'accountNumber': 94334803605,
        'status': 'active',
        'details': [
            {
                'address': 'Colonial Court',
                'city': 'Neibert',
                'state': 'FL',
                'phone': '(991) 432-2408',
                'payee': 'Kangle'
            }
        ]
    },
    {
        'vendorName': 'Papricut',
        'internalId': '629136f08225766118b611c3',
        'pmgId': 9253950,
        'email': 'harrietvaughn@papricut.com',
        'accountNumber': 41772756014,
        'status': 'active',
        'details': [
            {
                'address': 'Quentin Road',
                'city': 'Gerton',
                'state': 'MT',
                'phone': '(893) 503-3230',
                'payee': 'Enquility'
            }
        ]
    },
    {
        'vendorName': 'Navir',
        'internalId': '629136f0d2206cfef2eb19eb',
        'pmgId': 1037684,
        'email': 'sandersneal@navir.com',
        'accountNumber': 73838248486,
        'status': 'inactive',
        'details': [
            {
                'address': 'Girard Street',
                'city': 'Canoochee',
                'state': 'VA',
                'phone': '(950) 553-2339',
                'payee': 'Kraggle'
            }
        ]
    },
    {
        'vendorName': 'Jasper',
        'internalId': '629136f00c699f76752b02a2',
        'pmgId': 6299574,
        'email': 'howardrosario@jasper.com',
        'accountNumber': 64500042998,
        'status': 'active',
        'details': [
            {
                'address': 'Midwood Street',
                'city': 'Benson',
                'state': 'MA',
                'phone': '(936) 435-2445',
                'payee': 'Puria'
            }
        ]
    },
    {
        'vendorName': 'Earwax',
        'internalId': '629136f066bc2ee86abed298',
        'pmgId': 4973749,
        'email': 'helenmcguire@earwax.com',
        'accountNumber': 69782140341,
        'status': 'active',
        'details': [
            {
                'address': 'Harman Street',
                'city': 'Lund',
                'state': 'NM',
                'phone': '(908) 558-2395',
                'payee': 'Toyletry'
            }
        ]
    },
    {
        'vendorName': 'Menbrain',
        'internalId': '629136f00ea8a7e36f87f524',
        'pmgId': 4548698,
        'email': 'byersjarvis@menbrain.com',
        'accountNumber': 30498128941,
        'status': 'active',
        'details': [
            {
                'address': 'Crystal Street',
                'city': 'Lacomb',
                'state': 'MO',
                'phone': '(915) 405-2957',
                'payee': 'Mantro'
            }
        ]
    },
    {
        'vendorName': 'Marqet',
        'internalId': '629136f0e290c9592547c776',
        'pmgId': 1342192,
        'email': 'newtonduke@marqet.com',
        'accountNumber': 34883895682,
        'status': 'active',
        'details': [
            {
                'address': 'Meadow Street',
                'city': 'Rodman',
                'state': 'WA',
                'phone': '(899) 422-3868',
                'payee': 'Kongene'
            }
        ]
    },
    {
        'vendorName': 'Emoltra',
        'internalId': '629136f05d26376fe7da9473',
        'pmgId': 4384183,
        'email': 'larasullivan@emoltra.com',
        'accountNumber': 69442804918,
        'status': 'active',
        'details': [
            {
                'address': 'Sutton Street',
                'city': 'Nanafalia',
                'state': 'NY',
                'phone': '(832) 529-3651',
                'payee': 'Zuvy'
            }
        ]
    },
    {
        'vendorName': 'Wrapture',
        'internalId': '629136f03b531ccafd70271b',
        'pmgId': 7465702,
        'email': 'sotomorris@wrapture.com',
        'accountNumber': 14583015589,
        'status': 'active',
        'details': [
            {
                'address': 'Havemeyer Street',
                'city': 'Ryderwood',
                'state': 'DE',
                'phone': '(844) 440-2671',
                'payee': 'Talkola'
            }
        ]
    },
    {
        'vendorName': 'Geeketron',
        'internalId': '629136f06df416d10d4a7c59',
        'pmgId': 8682052,
        'email': 'claudinecampbell@geeketron.com',
        'accountNumber': 49748387226,
        'status': 'active',
        'details': [
            {
                'address': 'Monroe Place',
                'city': 'Shindler',
                'state': 'SC',
                'phone': '(918) 536-3624',
                'payee': 'Automon'
            }
        ]
    },
    {
        'vendorName': 'Geekko',
        'internalId': '629136f0eda47c64244c3cd2',
        'pmgId': 2565618,
        'email': 'lacyjacobs@geekko.com',
        'accountNumber': 61525584800,
        'status': 'active',
        'details': [
            {
                'address': 'Tampa Court',
                'city': 'Wedgewood',
                'state': 'MP',
                'phone': '(895) 598-2589',
                'payee': 'Acruex'
            }
        ]
    },
    {
        'vendorName': 'Centregy',
        'internalId': '629136f07a9b2cbe88d7ece9',
        'pmgId': 1388110,
        'email': 'vasquezgarner@centregy.com',
        'accountNumber': 29626159262,
        'status': 'inactive',
        'details': [
            {
                'address': 'Classon Avenue',
                'city': 'Bonanza',
                'state': 'MD',
                'phone': '(879) 400-3058',
                'payee': 'Digiprint'
            }
        ]
    },
    {
        'vendorName': 'Calcu',
        'internalId': '629136f0f094b72dc0cf8ad0',
        'pmgId': 6551099,
        'email': 'aprilwalter@calcu.com',
        'accountNumber': 50851383536,
        'status': 'active',
        'details': [
            {
                'address': 'Guider Avenue',
                'city': 'Holcombe',
                'state': 'ND',
                'phone': '(805) 575-2611',
                'payee': 'Duoflex'
            }
        ]
    },
    {
        'vendorName': 'Genesynk',
        'internalId': '629136f08ed064a7d09cf97d',
        'pmgId': 6795482,
        'email': 'alstonnieves@genesynk.com',
        'accountNumber': 74201159449,
        'status': 'active',
        'details': [
            {
                'address': 'Clara Street',
                'city': 'Caln',
                'state': 'UT',
                'phone': '(825) 590-3210',
                'payee': 'Emtrac'
            }
        ]
    },
    {
        'vendorName': 'Koffee',
        'internalId': '629136f0320ff1f3e1650e07',
        'pmgId': 6502746,
        'email': 'mollyharding@koffee.com',
        'accountNumber': 63218475680,
        'status': 'inactive',
        'details': [
            {
                'address': 'Keap Street',
                'city': 'Gardners',
                'state': 'WV',
                'phone': '(826) 507-3673',
                'payee': 'Retrotex'
            }
        ]
    },
    {
        'vendorName': 'Cofine',
        'internalId': '629136f02dcae80864b5dfcc',
        'pmgId': 8407616,
        'email': 'hullmelendez@cofine.com',
        'accountNumber': 56738818230,
        'status': 'active',
        'details': [
            {
                'address': 'Sumner Place',
                'city': 'Harold',
                'state': 'NC',
                'phone': '(958) 561-2901',
                'payee': 'Bytrex'
            }
        ]
    },
    {
        'vendorName': 'Steelfab',
        'internalId': '629136f05d57403aa513d721',
        'pmgId': 6021167,
        'email': 'bonniebarber@steelfab.com',
        'accountNumber': 31578292746,
        'status': 'active',
        'details': [
            {
                'address': 'Lott Place',
                'city': 'Clinton',
                'state': 'FM',
                'phone': '(802) 443-3199',
                'payee': 'Playce'
            }
        ]
    },
    {
        'vendorName': 'Vortexaco',
        'internalId': '629136f06a40b273f78f95ee',
        'pmgId': 8416627,
        'email': 'hesterpowers@vortexaco.com',
        'accountNumber': 34848686557,
        'status': 'inactive',
        'details': [
            {
                'address': 'Tennis Court',
                'city': 'Calverton',
                'state': 'KS',
                'phone': '(909) 402-2867',
                'payee': 'Frenex'
            }
        ]
    },
    {
        'vendorName': 'Diginetic',
        'internalId': '629136f034a036e3ddf08ee2',
        'pmgId': 4386946,
        'email': 'ashleehart@diginetic.com',
        'accountNumber': 81839669607,
        'status': 'inactive',
        'details': [
            {
                'address': 'Lincoln Road',
                'city': 'Floris',
                'state': 'TX',
                'phone': '(937) 470-3478',
                'payee': 'Buzzopia'
            }
        ]
    },
    {
        'vendorName': 'Isotrack',
        'internalId': '629136f0a8ed3017279e9363',
        'pmgId': 8667899,
        'email': 'mandymaldonado@isotrack.com',
        'accountNumber': 28560852453,
        'status': 'active',
        'details': [
            {
                'address': 'Huron Street',
                'city': 'Alafaya',
                'state': 'GU',
                'phone': '(902) 503-3472',
                'payee': 'Ewaves'
            }
        ]
    },
    {
        'vendorName': 'Kidstock',
        'internalId': '629136f018947dc8f0f06abf',
        'pmgId': 2671703,
        'email': 'henryforbes@kidstock.com',
        'accountNumber': 94652782044,
        'status': 'active',
        'details': [
            {
                'address': 'Leonard Street',
                'city': 'Charco',
                'state': 'GA',
                'phone': '(975) 500-2500',
                'payee': 'Arctiq'
            }
        ]
    },
    {
        'vendorName': 'Opticall',
        'internalId': '629136f034c17a28da8fc45a',
        'pmgId': 1550465,
        'email': 'letamontoya@opticall.com',
        'accountNumber': 48921575365,
        'status': 'inactive',
        'details': [
            {
                'address': 'Hastings Street',
                'city': 'Tolu',
                'state': 'WI',
                'phone': '(922) 533-3927',
                'payee': 'Tingles'
            }
        ]
    },
    {
        'vendorName': 'Musaphics',
        'internalId': '629136f094125b0076f971b9',
        'pmgId': 8584532,
        'email': 'gretchenmack@musaphics.com',
        'accountNumber': 23717250187,
        'status': 'inactive',
        'details': [
            {
                'address': 'Vandervoort Avenue',
                'city': 'Finzel',
                'state': 'NE',
                'phone': '(873) 402-3928',
                'payee': 'Yogasm'
            }
        ]
    },
    {
        'vendorName': 'Centree',
        'internalId': '629136f064f67d02193d6424',
        'pmgId': 3367381,
        'email': 'bauerhartman@centree.com',
        'accountNumber': 63686876381,
        'status': 'active',
        'details': [
            {
                'address': 'Bond Street',
                'city': 'Brookfield',
                'state': 'TN',
                'phone': '(879) 579-3055',
                'payee': 'Idego'
            }
        ]
    },
    {
        'vendorName': 'Zytrex',
        'internalId': '629136f0f06f004e3cd7741c',
        'pmgId': 5073666,
        'email': 'burgessfarrell@zytrex.com',
        'accountNumber': 66306563451,
        'status': 'active',
        'details': [
            {
                'address': 'Lewis Avenue',
                'city': 'Floriston',
                'state': 'VT',
                'phone': '(967) 509-2881',
                'payee': 'Zogak'
            }
        ]
    },
    {
        'vendorName': 'Callflex',
        'internalId': '629136f02a50fd016b74fdec',
        'pmgId': 9941825,
        'email': 'mindycasey@callflex.com',
        'accountNumber': 89034945292,
        'status': 'active',
        'details': [
            {
                'address': 'Jefferson Avenue',
                'city': 'Martinez',
                'state': 'SD',
                'phone': '(931) 443-3086',
                'payee': 'Gluid'
            }
        ]
    },
    {
        'vendorName': 'Medcom',
        'internalId': '629136f0713a0ff8b27844ba',
        'pmgId': 3191570,
        'email': 'clinemoses@medcom.com',
        'accountNumber': 98495210099,
        'status': 'active',
        'details': [
            {
                'address': 'Emmons Avenue',
                'city': 'Garfield',
                'state': 'PW',
                'phone': '(920) 581-3137',
                'payee': 'Rocklogic'
            }
        ]
    },
    {
        'vendorName': 'Qiao',
        'internalId': '629136f076009e25822c417d',
        'pmgId': 5868302,
        'email': 'simmonscalhoun@qiao.com',
        'accountNumber': 66557627672,
        'status': 'active',
        'details': [
            {
                'address': 'Branton Street',
                'city': 'Sunriver',
                'state': 'OR',
                'phone': '(912) 541-3188',
                'payee': 'Jimbies'
            }
        ]
    },
    {
        'vendorName': 'Turnabout',
        'internalId': '629136f0405b8e169cd93fc5',
        'pmgId': 1012381,
        'email': 'norrispatterson@turnabout.com',
        'accountNumber': 58784058485,
        'status': 'active',
        'details': [
            {
                'address': 'Covert Street',
                'city': 'Coalmont',
                'state': 'DC',
                'phone': '(966) 576-3049',
                'payee': 'Polarax'
            }
        ]
    },
    {
        'vendorName': 'Zentix',
        'internalId': '629136f0e7e7c0ccaa512557',
        'pmgId': 3347093,
        'email': 'robertssherman@zentix.com',
        'accountNumber': 69576364224,
        'status': 'active',
        'details': [
            {
                'address': 'Will Place',
                'city': 'Townsend',
                'state': 'OH',
                'phone': '(929) 422-2728',
                'payee': 'Limozen'
            }
        ]
    },
    {
        'vendorName': 'Oatfarm',
        'internalId': '629136f03999208ed4f8cbeb',
        'pmgId': 1028160,
        'email': 'morrowvalenzuela@oatfarm.com',
        'accountNumber': 53852516371,
        'status': 'active',
        'details': [
            {
                'address': 'Lancaster Avenue',
                'city': 'Bawcomville',
                'state': 'AZ',
                'phone': '(984) 415-2237',
                'payee': 'Delphide'
            }
        ]
    },
    {
        'vendorName': 'Dentrex',
        'internalId': '629136f098b881ddde3121ce',
        'pmgId': 4122138,
        'email': 'briggsguerra@dentrex.com',
        'accountNumber': 81528071704,
        'status': 'active',
        'details': [
            {
                'address': 'Crooke Avenue',
                'city': 'Lorraine',
                'state': 'OK',
                'phone': '(991) 568-2456',
                'payee': 'Sportan'
            }
        ]
    },
    {
        'vendorName': 'Gink',
        'internalId': '629136f086b753a80fc9916f',
        'pmgId': 1626549,
        'email': 'nellbarker@gink.com',
        'accountNumber': 88050128166,
        'status': 'active',
        'details': [
            {
                'address': 'Malbone Street',
                'city': 'Balm',
                'state': 'LA',
                'phone': '(892) 501-3848',
                'payee': 'Schoolio'
            }
        ]
    },
    {
        'vendorName': 'Bisba',
        'internalId': '629136f06e62be2cc518e44d',
        'pmgId': 3267711,
        'email': 'kayenash@bisba.com',
        'accountNumber': 20979650060,
        'status': 'active',
        'details': [
            {
                'address': 'Fillmore Avenue',
                'city': 'Cartwright',
                'state': 'HI',
                'phone': '(811) 485-3090',
                'payee': 'Tourmania'
            }
        ]
    },
    {
        'vendorName': 'Pharmacon',
        'internalId': '629136f069f3e0cc5a75fe50',
        'pmgId': 4845288,
        'email': 'alliehenderson@pharmacon.com',
        'accountNumber': 29245786984,
        'status': 'inactive',
        'details': [
            {
                'address': 'Caton Avenue',
                'city': 'Jugtown',
                'state': 'AR',
                'phone': '(897) 483-2946',
                'payee': 'Gology'
            }
        ]
    },
    {
        'vendorName': 'Jetsilk',
        'internalId': '629136f03b32bd54973d4684',
        'pmgId': 7923041,
        'email': 'nevaholloway@jetsilk.com',
        'accountNumber': 30140479498,
        'status': 'active',
        'details': [
            {
                'address': 'Milton Street',
                'city': 'Glenshaw',
                'state': 'KY',
                'phone': '(847) 583-3025',
                'payee': 'Pushcart'
            }
        ]
    },
    {
        'vendorName': 'Qualitern',
        'internalId': '629136f0a051823eb402676f',
        'pmgId': 6813476,
        'email': 'gonzalezsweet@qualitern.com',
        'accountNumber': 24613097859,
        'status': 'active',
        'details': [
            {
                'address': 'Catherine Street',
                'city': 'Verdi',
                'state': 'MI',
                'phone': '(953) 488-2312',
                'payee': 'Verbus'
            }
        ]
    },
    {
        'vendorName': 'Exozent',
        'internalId': '629136f0cfefc4a2cb39d2c4',
        'pmgId': 5444324,
        'email': 'foleyrosa@exozent.com',
        'accountNumber': 36793176990,
        'status': 'active',
        'details': [
            {
                'address': 'Lorraine Street',
                'city': 'Brecon',
                'state': 'VI',
                'phone': '(952) 565-2034',
                'payee': 'Lumbrex'
            }
        ]
    },
    {
        'vendorName': 'Geekfarm',
        'internalId': '629136f068c13530d7ea6e1c',
        'pmgId': 7224201,
        'email': 'gabrielahale@geekfarm.com',
        'accountNumber': 70440692095,
        'status': 'active',
        'details': [
            {
                'address': 'Hutchinson Court',
                'city': 'Irwin',
                'state': 'IA',
                'phone': '(841) 536-3683',
                'payee': 'Updat'
            }
        ]
    },
    {
        'vendorName': 'Harmoney',
        'internalId': '629136f044856f95a61e9010',
        'pmgId': 6145197,
        'email': 'lawsonwynn@harmoney.com',
        'accountNumber': 29820040189,
        'status': 'inactive',
        'details': [
            {
                'address': 'Himrod Street',
                'city': 'Gloucester',
                'state': 'PR',
                'phone': '(982) 447-3726',
                'payee': 'Accruex'
            }
        ]
    },
    {
        'vendorName': 'Exoblue',
        'internalId': '629136f04c383bb872323c60',
        'pmgId': 1608432,
        'email': 'melvasuarez@exoblue.com',
        'accountNumber': 19269339151,
        'status': 'active',
        'details': [
            {
                'address': 'Maple Street',
                'city': 'Barclay',
                'state': 'NJ',
                'phone': '(801) 475-2928',
                'payee': 'Overfork'
            }
        ]
    },
    {
        'vendorName': 'Exosis',
        'internalId': '629136f0a9dea538b3de11a3',
        'pmgId': 4467241,
        'email': 'mccallashley@exosis.com',
        'accountNumber': 30035161732,
        'status': 'active',
        'details': [
            {
                'address': 'Chauncey Street',
                'city': 'Caledonia',
                'state': 'CT',
                'phone': '(830) 418-2129',
                'payee': 'Pawnagra'
            }
        ]
    },
    {
        'vendorName': 'Rubadub',
        'internalId': '629136f0240757067540a4df',
        'pmgId': 5927805,
        'email': 'mayermosley@rubadub.com',
        'accountNumber': 22493819395,
        'status': 'active',
        'details': [
            {
                'address': 'Seabring Street',
                'city': 'Springville',
                'state': 'IN',
                'phone': '(938) 580-2180',
                'payee': 'Orbean'
            }
        ]
    },
    {
        'vendorName': 'Progenex',
        'internalId': '629136f037e4e22433363df4',
        'pmgId': 5868114,
        'email': 'skinnerreilly@progenex.com',
        'accountNumber': 18793856550,
        'status': 'active',
        'details': [
            {
                'address': 'Lawton Street',
                'city': 'Hailesboro',
                'state': 'CA',
                'phone': '(838) 464-3521',
                'payee': 'Podunk'
            }
        ]
    },
    {
        'vendorName': 'Mitroc',
        'internalId': '629136f0dbfd23a9c35fc4a4',
        'pmgId': 3438142,
        'email': 'simonirwin@mitroc.com',
        'accountNumber': 66091766640,
        'status': 'active',
        'details': [
            {
                'address': 'Barwell Terrace',
                'city': 'Waikele',
                'state': 'PA',
                'phone': '(991) 455-2702',
                'payee': 'Songlines'
            }
        ]
    },
    {
        'vendorName': 'Euron',
        'internalId': '629136f06ce9226bac989de7',
        'pmgId': 2915547,
        'email': 'juarezbass@euron.com',
        'accountNumber': 16728421247,
        'status': 'active',
        'details': [
            {
                'address': 'Kimball Street',
                'city': 'Ogema',
                'state': 'ID',
                'phone': '(975) 589-2825',
                'payee': 'Honotron'
            }
        ]
    },
    {
        'vendorName': 'Coash',
        'internalId': '629136f0facebff29419dc1b',
        'pmgId': 9551722,
        'email': 'weaverrush@coash.com',
        'accountNumber': 42414668545,
        'status': 'active',
        'details': [
            {
                'address': 'Grand Street',
                'city': 'Westwood',
                'state': 'NH',
                'phone': '(921) 550-2984',
                'payee': 'Hyplex'
            }
        ]
    },
    {
        'vendorName': 'Golistic',
        'internalId': '629136f0275f15d6e58f5cc5',
        'pmgId': 4493644,
        'email': 'freemanhead@golistic.com',
        'accountNumber': 66262848693,
        'status': 'active',
        'details': [
            {
                'address': 'Manor Court',
                'city': 'Lindisfarne',
                'state': 'MN',
                'phone': '(996) 404-3928',
                'payee': 'Mantrix'
            }
        ]
    },
    {
        'vendorName': 'Deepends',
        'internalId': '629136f0f76353e6a1001049',
        'pmgId': 7433602,
        'email': 'doramcbride@deepends.com',
        'accountNumber': 91018299020,
        'status': 'inactive',
        'details': [
            {
                'address': 'Hancock Street',
                'city': 'Abrams',
                'state': 'ME',
                'phone': '(812) 501-3252',
                'payee': 'Omatom'
            }
        ]
    },
    {
        'vendorName': 'Zeam',
        'internalId': '629136f0ea58e228eefce316',
        'pmgId': 5216634,
        'email': 'deirdrecastillo@zeam.com',
        'accountNumber': 81874595471,
        'status': 'active',
        'details': [
            {
                'address': 'Durland Place',
                'city': 'Waverly',
                'state': 'CO',
                'phone': '(806) 560-2541',
                'payee': 'Insectus'
            }
        ]
    }
]

export const identifiedVendorData: GridRowsProp = vendorGridData.map((row, index) => {
    const typedRow: DataProps = row
    typedRow.details[0].id = index
    typedRow.id = `vendorRow${index}`
    return typedRow
})