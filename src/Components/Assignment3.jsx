import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'

const Assignment3 = () => {
  const [user, setUser] = useState()
  const [arr, setArr] = useState([])
  const [change, setChange] = useState('')
  const [user1, setUser1] = useState()
  const [arr1, setArr1] = useState([])
  const [user2, setUser2] = useState()
  const [arr2, setArr2] = useState([])




// api fetch

  const getUsers = async () => {
    axios.get('https://testapi.buopso.com/lms/owners/').then((response) => {
      // console.log(response.data.result)
      setUser(response.data.result)
    })
  }
  

  const getUsers1 = async () => {
    axios.get('https://testapi.buopso.com/lms/sources/').then((response) => {
      //console.log(response.data.result)
      setUser1(response.data.result)
    })
   
  } 

  const getUsers2 = async () => {
    axios.get('https://testapi.buopso.com/lms/stages/').then((response) => {
      // console.log(response.data.result)
      setUser2(response.data.result)
    })
    
  } 
// useeffect hook

  useEffect(() => {
    getUsers()
    getUsers1()
    getUsers2()
  }, [])

  // handle search input feild with onchange event
  const handleInput = (e) => {
    setArr(
      user.filter((curElem, id) => {
        return curElem.firstName.toLowerCase().startsWith(e.target.value)
      }),
    )
  }

  const handleInput1 = (e) => {
    setArr1(
      user1.filter((curElem1, id) => {
        return curElem1.label.toLowerCase().startsWith(e.target.value)
      }),
    )
  }

  const handleInput2 = (e) => {
    setArr2(
      user2.filter((curElem2, id) => {
        return curElem2.label.toLowerCase().startsWith(e.target.value)
      }),
    )
  }

  return (
    <>
      <section>
      {/* owner Accordion */}
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lead Owner</Accordion.Header>
            <Accordion.Body>
              <div className="w-100 clsborder text-start">
                <input type="search" placeholder='Search' onChange={handleInput} />
                <FontAwesomeIcon className='text-end' icon={faSearch} />
              </div>
              <hr/>
              <div>
                {arr.map((curElem, id) => {
                  return (
                    <>
                      <div className="mt-5  me-2 text-start">
                        <input type="radio" value="Male" name="gender" />{' '}
                        <span className="icon">
                          {curElem.firstName.slice(0, 1)}{' '}
                        </span>
                        {curElem.firstName} {curElem.lastName}
                      </div>
                    </>
                  )
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      {/* Sources Accordion */}
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lead Sources</Accordion.Header>
            <Accordion.Body>
              <div className="w-100 clsborder text-start">
                <input type="search" placeholder='Search' onChange={handleInput1} />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <hr/>
              <div>
                {arr1.map((curElem1, id) => {
                  return (
                    <>
                      <div className="mt-5  me-2 text-start">
                        <input type="radio" value="Male" name="gender" />{' '}
                        {console.log(curElem1)}
                        {curElem1.label} 
                      </div>
                    </>
                  )
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      
      {/* Stage Accordion */}
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lead Stage</Accordion.Header>
            <Accordion.Body>
              <div className="w-100 clsborder text-start">
                <input type="search" placeholder='Search' onChange={handleInput2} />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <hr/>
              <div>
                {arr2.map((curElem2, id) => {
                  return (
                    <>
                      <div className="mt-5  me-2 text-start">
                        <input type="radio" value="Male" name="gender" />{' '}
                        {curElem2.label} 
                      </div>
                    </>
                  )
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  )
}

export default Assignment3
