import React from 'react';
import './App.css';
// 入力用の明細
const Detail : React.FC<DetailProps>=props=> {
  const onNumberOfPeopleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num: number = Number(e.target.value);
    props.onNumOfPeopleChange(num);
  }

  return (
    <div >
      <div className="classification-name">{props.classification.name}</div>
      <div className="description">{props.classification.description}</div>
      <div className="unit-price">{props.classification.unitPrice}円</div>
      <div className="num-people">
        <select value={props.classification.numOfPeople}
          onChange={e => onNumberOfPeopleChange(e)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>名</span>
      </div>
    </div>
  );
}

// 合計を表示 
const Summary: React.FC<SUmmaryProps> = props => {
    return (
      <div>
        <div className="party">
          <input type="text" className="party" value={props.numOfPeople} />
          <span>名様</span>
        </div>
        <div className="total-amount">
          <span>合計</span>
          <input type="text" className="total-amount" value={props.totalAmount} />
          <span>円</span>
        </div>
      </div>
    );
}

// 明細合計をまとめたもの
class AdmissionFeeCalculator extends React.Component<{}, AdmissionFeeCalculatorState> {
  constructor(props:{}){
    super(props);
    const adults: FeeClassification = {
      name: "大人",
      description: "",
      unitPrice: 1000,
      numOfPeople: 0,
      totalPrice: 0,
    };
    const students:FeeClassification={
      name: "学生",
      description: "中高生",
      unitPrice: 700,
      numOfPeople: 0,
      totalPrice: 0,
    };
    const children={
      name: "こども",
      description: "小学生",
      unitPrice: 300,
      numOfPeople: 0,
      totalPrice: 0,
    };
    const infants={
      name: "幼児",
      description: "未就学",
      unitPrice: 0,
      numOfPeople: 0,
      totalPrice: 0,
    };
    this.state = { feeClasifications: [adults, students, children, infants] };
  }  
  handleNumOfPeopleChnge(idx:number,num:number){
    const currentFC=this.state.feeClasifications[idx];
    const newTotalPrice = currentFC.unitPrice * num;
    const newFC:FeeClassification=
    Object.assign({},currentFC,{numOfPeople:num,totalPrice:newTotalPrice});
    const feeClasifications=this.state.feeClasifications.slice();//Val copy
    feeClasifications[idx]=newFC;
    this.setState({feeClasifications:feeClasifications});

  }
  render() {
    const details = this.state.feeClasifications.map(
      (fc, idx) =>{
    return (
      <Detail key={idx.toString()} classification={fc}
        onNumOfPeopleChange={n => this.handleNumOfPeopleChnge(idx, n)} />
    );
    });

    const numOfPeople=this.state.feeClasifications
    .map(fc=>fc.numOfPeople).reduce((p,c)=>p+c);
    const totalAmount=this.state.feeClasifications
    .map(fc=>fc.totalPrice).reduce((p,c)=>p+c);
    return (
      <>
        {details}
        <Summary numOfPeople={numOfPeople} totalAmount={totalAmount} />
      </>
    );
  }
}

// エントリーポイント
const App: React.FC = () => {
  return (
    <div className="main">
      <AdmissionFeeCalculator />
    </div>
  );
}

type FeeClassification ={
  name :string;
  description:string;
  unitPrice:number;
  numOfPeople:number;
  totalPrice:number;
}

type DetailProps={
  classification:FeeClassification;
  onNumOfPeopleChange:(num:number)=>void;
}

type DetailState = {
  numOfPeople:number;
}

type AdmissionFeeCalculatorState={
feeClasifications:FeeClassification[];
}

type SUmmaryProps={
  numOfPeople:number;
  totalAmount:number;
}
export default App;