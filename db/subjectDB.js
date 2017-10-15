let pool=require('./pool');

module.exports={
    getAllSubjectType(){
        var sql="select * from tbl_exam_subjecttype";
        return pool.execute(sql);
    },
    getAllSubjectLevel(){
        var sql="select * from tbl_exam_subjectlevel";
        return pool.execute(sql);
    },
    getAllDepartmentes(){
        var sql="select * from tbl_exam_epartment";
        return pool.execute(sql);
    },
    getAllTopics(){
        var sql="select * from tbl_exam_topic";
        return pool.execute(sql);
    },
    //显示题目信息
    getAllSubjects(subjectType_id,subjectLevel_id,department_id,topic_id){
        var sql="select * from tbl_exam_subject where subjectType_id="
        +subjectType_id+" and subjectLevel_id="
        +subjectLevel_id+" and department_id="
        +department_id+" and topic_id="+topic_id+" ";
        // console.log(sql);
        return pool.execute(sql);
    },
    //通过和不通过
    checkSubject(subject_id,check){
        // console.log(check)
        var sql="update tbl_exam_subject set checkState='"+check+"' where id= "+subject_id+" ";
        return pool.execute(sql);
    },
    //选项
    choiceSubject(subject_id){
        var sql="select * from tbl_exam_choice where subject_id="+subject_id;
        // console.log(sql);
        return pool.execute(sql);
    },
    //保存试题
    
    saveSubject(subjectType_id,subjectLevel_id,department_id,topic_id,analysis,answer,checkState){
        var sql="insert into tbl_exam_subject values(subjectType_id="
        +subject_id+",subjectLevel_id="
        +subjectLevel_id+",department_id="
        +deparment_id+",topic_id="
        +topic_id+",analysis='"
        +analysis+"',answer='"
        +answer+"',checkState='"
        +checkState+"')";
	    findSubject(sql,resp).then((ids)=>{
		choiceCorrect.forEach(function(item,index){
		var sql = "insert into tbl_exam_choice(content,correct,subject_id) values('"+choiceContents[index]+"',"+item+","+ids+")";
		})
	});

        return pool.execute(sql);
    }
        
}  


        
