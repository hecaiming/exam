let express=require('express');
let route=express.Router();
let subjectDB=require('../db/subjectDB');

//获取所有题目类型
route.get('/getAllSubjectType',(req,resp)=>{
    subjectDB.getAllSubjectType().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//获取难易程度数据
route.get('/getAllSubjectLevel',(req,resp)=>{
    subjectDB.getAllSubjectLevel().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//获取方向数据
route.get('/getAllDepartmentes',(req,resp)=>{
    subjectDB.getAllDepartmentes().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//获取知识点数据
route.get('/getAllTopics',(req,resp)=>{
    subjectDB.getAllTopics().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

//显示题型
route.post('/getAllSubjects',(req,resp)=>{
    // console.log(req.body);
    var queryInfo=req.body;
    var subjectType_id=queryInfo['subject.subjectType.id'];
    var subjectLevel_id=queryInfo['subject.subjectLevel.id'];
    var department_id=queryInfo['subject.department.id'];
    var topic_id=queryInfo['subject.topic.id'];
    // console.log("----------",subjectType_id);
    subjectDB.getAllSubjects(subjectType_id,subjectLevel_id,department_id,topic_id).then((data)=>{
        // console.log(data);
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

//审核通过
route.post('/checkSubject',(req,resp)=>{
    var subject_checkState=req.body.subject_checkState;
    var subject_id=req.body.subject_id;
    // console.log(subject_id);
    subjectDB.checkSubject(subject_id,subject_checkState).then((data)=>{
        // console.log(data);
        resp.send(data);
    }).catch((error)=>{
        resp.send(error); 
    })
});
//显示选项
route.post('/choiceSubject',(req,resp)=>{
    var subjectId=req.body.subjectId;
    console.log(subjectId);
    subjectDB.choiceSubject(subjectId).then((data)=>{
        resp.send(data);
        console.log(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
module.exports=route;