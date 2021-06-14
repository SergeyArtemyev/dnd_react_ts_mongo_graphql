const AbPoints = () => {
    return (
        <div className='col l6 s12'>
            <div className='row'>
                <div className='col s6'>
                    <div>
                        <h5>Points Remaining</h5>
                        <span className='remaining-points'></span> / 27
                    </div>
                    <div className='ability-description'>
                        <h5>Strength</h5>
                        <p>
                            Strength measures bodily power, athletic training, and the extent to
                            which you can exert raw physical force.
                        </p>
                    </div>
                </div>
                <div className='col s6 p-1-side text-align-center'>
                    <h5 className='text-align-center'>Ability Scores and Modifiers</h5>
                    <table className='score'>
                        <tbody>
                            <tr>
                                <th>Score</th>
                                <th>Modifier</th>
                            </tr>
                            <tr>
                                <td>8-9</td>
                                <td>-1</td>
                            </tr>
                            <tr>
                                <td>10-11</td>
                                <td>+0</td>
                            </tr>
                            <tr>
                                <td>12-13</td>
                                <td>+1</td>
                            </tr>
                            <tr>
                                <td>14-15</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>16-17</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>18-19</td>
                                <td>+4</td>
                            </tr>
                            <tr>
                                <td>20-21</td>
                                <td>+5</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='score'>
                        <tbody>
                            <tr>
                                <th>Score</th>
                                <th>Cost</th>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AbPoints;
