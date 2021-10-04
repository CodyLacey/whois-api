import React, {useState} from 'react'

const Info = () => {
    
    const [domainUrl, setDomainUrl] = useState('')
    const [domainInfo, setDomainInfo] = useState(null)


    const getUrl = (x) => {

        if(domainUrl.includes('.com') || domainUrl.includes('.net') || domainUrl.includes('.org') || domainUrl.includes('.co') || domainUrl.includes('.app') || domainUrl.includes('.ai') || domainUrl.includes('.biz') || domainUrl.includes('.dev') || domainUrl.includes('.link') || domainUrl.includes('.live') || domainUrl.includes('.online') || domainUrl.includes('.site') || domainUrl.includes('.top') || domainUrl.includes('.tv') || domainUrl.includes('.us') || domainUrl.includes('.xyz') || domainUrl.includes('.gov')|| domainUrl.includes('.io')) 
        {
            console.log(x);
            const url = `https://whois-api-app.herokuapp.com/api/whois/${x}`
            fetch(url)
            .then(res => res.json())
            .then(response => setDomainInfo(response))
        }else {
            alert('Oops please add a TLD to your domain!')
            console.log(x);
        }
        
    }

    if(domainInfo){
        return (
        <div>
          <Info />
        <div className='domainResults'>
            <h2>{domainUrl.toLowerCase()}</h2>
            <a href={'https://' + domainUrl} target='_blank' rel='noreferrer' >Visit Site</a>
            
            <table className='domainInfo'>
                <h3>Domain Info</h3>
                <tr>
                    <th>Domain Name</th>
                    <td>{domainInfo.WhoisRecord.domainName}</td>
                </tr>

                <tr>
                    <th>Expiry Date</th>
                    <td>{domainInfo.WhoisRecord.expiresDate}</td>
                </tr>

                <tr>
                    <th>Name Server</th>
                    <td>{domainInfo.WhoisRecord.nameServers.hostNames[0]}</td>
                </tr>

                <tr>
                    <th>Created Date</th>
                    <td>{domainInfo.WhoisRecord.createdDate}</td>
                </tr>

                <tr>
                    <th>Updated Date</th>
                    <td>{domainInfo.WhoisRecord.updatedDate}</td>
                </tr>
                <tr>
                    <th>Domain Status</th>
                    <td>{domainInfo.WhoisRecord.status}</td>
                </tr>
                <tr>
                    <th>Domain Age</th>
                    <td>{domainInfo.WhoisRecord.estimatedDomainAge}</td>
                </tr>
                
            </table>

            <table className='Registrar'>
                <h3>Registrar</h3>
                <tr>
                    <th>Registrar</th>
                    <td>{domainInfo.WhoisRecord.registrarName}</td>
                </tr>

                <tr>
                    <th>Registrar URL</th>
                    <td>{domainInfo.WhoisRecord.customField3Value}</td>
                </tr>

                <tr>
                    <th>Registrar IANA ID</th>
                    <td>{domainInfo.WhoisRecord.registrarIANAID}</td>
                </tr>

                <tr>
                    <th>Registrar WHOIS Server</th>
                    <td>{domainInfo.WhoisRecord.whoisServer}</td>
                </tr>

                <tr>
                    <th>Registrar Abuse Contact Email</th>
                    <td>{domainInfo.WhoisRecord.customField1Value}</td>
                </tr>

                <tr>
                    <th>Registrar Registar Abuse Contact Phone</th>
                    <td>{domainInfo.WhoisRecord.customField2Value}</td>
                </tr>
            </table>

            <table className='contactRegistrant'>
                <h4>Contact - Registrant</h4>
                <tr>
                    <th>Name</th>
                    <td>{domainInfo.WhoisRecord.registrant.name}</td>
                </tr>

                <tr>
                    <th>Organization</th>
                    <td>{domainInfo.WhoisRecord.registrant.organization}</td>
                </tr>

                <tr>
                    <th>Email</th>
                    <td>{domainInfo.WhoisRecord.registrant.email}</td>
                </tr>

                <tr>
                    <th>Phone-Number</th>
                    <td>{domainInfo.WhoisRecord.registrant.telephone}</td>
                </tr>

                <tr>
                    <th>Fax</th>
                    <td>{domainInfo.WhoisRecord.registrant.fax}</td>
                </tr>

                <tr>
                    <th>Address</th>
                    <td>{domainInfo.WhoisRecord.registrant.street1}</td>
                </tr>

                <tr>
                    <th>City</th>
                    <td>{domainInfo.WhoisRecord.registrant.city}</td>
                </tr>

                <tr>
                    <th>State</th>
                    <td>{domainInfo.WhoisRecord.registrant.state}</td>
                </tr>

                <tr>
                    <th>Postal Code</th>
                    <td>{domainInfo.WhoisRecord.registrant.postalCode}</td>
                </tr>

                <tr>
                    <th>Country</th>
                    <td>{domainInfo.WhoisRecord.registrant.country}</td>
                </tr>

            </table>

            <table className='contactAdmin'>
                <h4>Contact - Admin</h4>
                <tr>
                    <th>Name</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.name}</td>
                </tr>

                <tr>
                    <th>Organization</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.organization}</td>
                </tr>

                <tr>
                    <th>Email</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.email}</td>
                </tr>

                <tr>
                    <th>Phone-Number</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.telephone}</td>
                </tr>

                <tr>
                    <th>Fax</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.fax}</td>
                </tr>

                <tr>
                    <th>Address</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.street1}</td>
                </tr>

                <tr>
                    <th>City</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.city}</td>
                </tr>

                <tr>
                    <th>State</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.state}</td>
                </tr>

                <tr>
                    <th>Postal Code</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.postalCode}</td>
                </tr>

                <tr>
                    <th>Country</th>
                    <td>{domainInfo.WhoisRecord.administrativeContact.country}</td>
                </tr>

            </table>

            <table className='contactTech'>
                <h4>Contact - Tech</h4>
               <tr>
                    <th>Name</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.name}</td>
                </tr>
                
                <tr>
                    <th>Organization</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.organization}</td>
                </tr>

                <tr>
                    <th>Email</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.email}</td>
                </tr>

                <tr>
                    <th>Phone-Number</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.telephone}</td>
                </tr>

                <tr>
                    <th>Fax</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.fax}</td>
                </tr>

                <tr>
                    <th>Address</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.street1}</td>
                </tr>

                <tr>
                    <th>City</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.city}</td>
                </tr>

                <tr>
                    <th>State</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.state}</td>
                </tr>

                <tr>
                    <th>Postal Code</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.postalCode}</td>
                </tr>

                <tr>
                    <th>Country</th>
                    <td>{domainInfo.WhoisRecord.technicalContact.country}</td>
                </tr>

                
            </table>

        </div>
        </div>
    )
    }

    return (
        <div className='form'>
            <input value={domainUrl} id='domainUrlId' onChange={e => setDomainUrl(e.target.value)} placeholder='Search for any domain' required></input>
            <button className='search' onClick={() => getUrl(domainUrl)}>Search</button>
                
        </div>
    )
}

export default Info
