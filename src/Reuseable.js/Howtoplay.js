import React from 'react'
import './Howtoplay.css'

const Howtoplay = () => {
    return (
        <div>
              <div className="howtoplay table-responsive">
                  <table className="table table-borderless text-center">
                    <thead className="thead ">
                      <tr>
                        <th className="py-4">DIRECT GAME</th>
                        <th></th>
                        <th>VALUE BREAKDOWN</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                          <h6>Direct 2</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item no-fill-color">/</li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                          </ul>
                          <small><strong>(Match the first/last 2 numbers in the correct order)</strong></small>
                        </td>
                        <td>
                          <h6> N25,000</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Direct 3</h6>
                        </td>
                        <td>
                          <ul className="list-inline">
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item no-fill-color">/</li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color-outline"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                          </ul>
                          <small><strong>(Match the first/last 3 numbers in the correct order)</strong></small>
                        </td>
                        <td>
                          <h6> N50,000</h6>
                        </td>
                      </tr>
                      <tr>
                        <th>PERMUTATION</th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>
                          <h6>Perm 2</h6>
                        </td>
                        <td>
                          <small><strong>(Match any 2 numbers from the draw)</strong></small>
                        </td>
                        <td>
                          <h6> N5,000</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Perm 3</h6>
                        </td>
                        <td>
                          <small><strong>(Match any 3 numbers from the draw)</strong></small>
                        </td>
                        <td>
                          <h6> N10,000</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Perm 4</h6>
                        </td>
                        <td>
                          <small><strong>(Match any 4 numbers from the draw)</strong></small>
                        </td>
                        <td>
                          <h6> N20,000</h6>
                        </td>
                      </tr>
                      <tr>
                        <th>JACKPOT</th>
                        <th>
                        <ul className="list-inline">
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                            <li className="list-inline-item fill-color"></li>
                          </ul>
                          <h6><small><strong>(Match any 5 numbers from the draw)</strong></small></h6>
                        </th>
                        <th>N2,500,000</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
            
        </div>
    )
}

export default Howtoplay
