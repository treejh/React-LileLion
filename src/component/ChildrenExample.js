import First from "./First";
import Parent from "./Parent";
import Second from "./Second";

const ChildrenExam =() =>{
    return <Parent>
        <First></First>
        <Second name = "jihyun"></Second>
        <Second name = "jihyun1"></Second>
        <Second name = "jihyun2"></Second>
    </Parent>

}

export default ChildrenExam;