const express=require(`express`);
const router=express.Router();
const {personageSelect,personageAdd,selectOnePersonage,personagePut,personageDelete}=require(`../controllers/personage.controllers`);


router.get(`/select`,personageSelect);
router.post(`/add`,personageAdd);
router.get(`/selectOne/:id`,selectOnePersonage);
router.put(`/update/:id`,personagePut);
router.delete(`/delete/:id`,personageDelete);

module.exports=router;