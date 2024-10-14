import React from 'react';
import { PrintComp } from './PrintComp';
import { PrintVar } from './PrintVar';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { Button } from '@mantine/core';
import { PrintVarCancel } from './PrintVarCancel';
import { PrintCompWarranty } from './PrintCompWarranty';

export class Print extends React.PureComponent {
    constructor(props){
        super(props)
        this.props = props.props
    }

    clickPrint(step){
        step()
        this.props.close()
    }
    documentSheet(){
      
      if(this.props.format === 'new'){
        console.log(this.props.format)
        return <PrintComp props={this.props} ref={el => (this.componentRef = el)}/>
      }
      else if(this.props.format === 'close'){
        console.log(this.props.format)
        return <PrintVar props={this.props} ref={el => (this.componentRef = el)}/>
      }
      else if(this.props.format === 'warranty'){
        console.log(this.props.format)
          return <PrintCompWarranty props={this.props} ref={el => (this.componentRef = el)}/>
        }
      else if(this.props.format === 'cancel'){
        console.log(this.props.format)
        return <PrintVarCancel props={this.props} ref={el => (this.componentRef = el)}/>
      }
    }

  render() {
    return (
      <div>
        <ReactToPrint bodyClass="print-agreement" content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div>
                <div style={{textAlign: 'center', marginTop: '1.7vmax'}}>
                  <Button color='red' onClick={this.props.close}  style={{width: 375, marginRight: '1.7vmax', marginBottom: '1vmax'}}>Отмена</Button>
                  <Button color='green' autoFocus={true} type="primary" style={{width: 375, marginBottom: '1vmax'}} onClick={(e) => this.clickPrint(handlePrint)}>Печать</Button>
                </div>
                <div style={{ marginLeft: '1.7vmax' }}>
                  {this.documentSheet()}
                  
                </div>
              </div>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    )
  }
}



// function refreshPage(){
//     window.location.reload()
// }
