<template>
  <div>
    <div>
      <h1>แบบฟอร์มขออนุญาตจัดตั้งชมรม</h1>
    </div>

    <div>
      <h2>ประธานชมรม:</h2>
      <input v-model="president" type="president">
    </div>

    <div>
    <b-form-group label="ชั้นปี">
      <b-form-radio-group  aria-controls="ex-disabled-readonly">
        <b-form-radio value="disabled">1</b-form-radio>
        <b-form-radio value="readonly">2</b-form-radio>
        <b-form-radio value="normal">3</b-form-radio>
        <b-form-radio value="normal">4</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    </div>

    <div>
      <h2>รหัสนิสิต:</h2>
      <input v-model="id" type="id">
    </div>
    <div>
      <h2>Email:</h2>
      <input v-model="email" type="Email">
    </div>

    <div>
      <h2>คณะ:</h2>
      <select v-model="Fselected">
        <option  v-for="fac in Faculties" :key="fac.id" :value="fac.id">{{fac.name}}</option>
      </select>
    </div>

    <div>
      <h2>สาขา:</h2>
      <select v-model="Mselected">
        <option name="" id="" v-for="m in facSelected" :key="m.id" :value="m.id">{{m.name}}</option>
      </select>
    </div>

    <div>
      <h2>ชื่อชมรม::</h2>
      <input v-model="clubname" type="clubname">
    </div>

    <div>
      <b-form-checkbox v-model="oldclub" type='oldclub'>ชมรมเก่า</b-form-checkbox>
      <b-form-checkbox v-model="newclub" type='newclub'>ชมรมใหม่</b-form-checkbox>
    </div> 

    <div>
      <div>
        <h2>ประเภทชมรม:</h2>
      </div>
      <div style="text-indent: 50px">
        <b-form-checkbox v-model="category1" >ด้านบำเพ็ญประโยชน์และรักษาสิ่งแวดล้อม</b-form-checkbox>
        <b-form-checkbox v-model="category2" >ด้านส่งเสริมศิลปวัฒนธรรม</b-form-checkbox>
        <b-form-checkbox v-model="category3" >ด้านกีฬาและส่งเสริมสุขภาพ</b-form-checkbox>
        <b-form-checkbox v-model="category4" >ด้านเสริมกิจกรรมวิชาการ</b-form-checkbox>
        <b-form-checkbox v-model="category5" >ด้านส่งเสริมกิจกรรมและนันทนาการ</b-form-checkbox>
      </div> 
    </div>

    <div>
      <b-button to="/" @click="ea" size="sm" class="my-2 my-sm-0" type="submit">ถัดไป </b-button>
    </div>
    <div>{{presidents}} {{ids}}</div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      president: '',
      id: '',
      email: '',
      clubname: '',
      oldclub: '',
      newclub: '',
      category1: '',
      category2: '',
      category3: '',
      category4: '',
      category5: '',
      Faculties: [
        {id: 'agri', name: 'เกษตรศาสตร์และทรัพยากรธรรมชาติ'},
        {id: 'ict', name: 'เทคโนโลยีสารสนเทศและการสื่อสาร'},
        {id: 'nurs', name: 'พยาบาลศาสตร์'},
        {id: 'pham', name: 'เภสัชศาสตร์'},
        {id: 'sci', name: 'วิทยาศาสตร์'},
        {id: 'engi', name: 'วิศวกรรมศาสตร์'},
        {id: 'arts', name: 'สถาปัตยกรรมศาสตร์และศิลปกรรมศาสตร์'},
        {id: 'dental', name: 'ทันตแพทยศาสตร์'},
        {id: 'laws', name: 'นิติศาสตร์'},
        {id: 'medi', name: 'แพทยศาสตร์'},
        {id: 'adminis', name: 'รัฐศาสตร์และสังคมศาสตร์'},
        {id: 'econ', name: 'วิทยาการจัดการและสารสนเทศศาสตร์'},
        {id: 'spnd', name: 'วิทยาศาสตร์การแพทย์'},
        {id: 'apt', name: 'ศิลปศาสตร์'},
        {id: 'spes', name: 'พลังงานและสิ่งแวดล้อม'},
        {id: 'sec', name: 'วิทยาลัยการศึกษา'}
      ],
      majors:{
        agri: [
          {id: 'tpat', name: 'สาขาวิชาเทคโนโลยีการเกษตร'},
          {id: 'spa', name: 'สาขาวิชาเกษตรศาสตร์'},
          {id: 'spf', name: 'สาขาวิชาการประมง '},
          {id: 'spfs', name: 'สาขาวิชาความปลอดภัยทางอาหาร'},
          {id: 'spfat', name: 'สาขาวิชาวิทยาศาสตร์และเทคโนโลยีการอาหาร'},
          {id: 'spas', name: 'สาขาวิชาสัตวศาสตร์ '}
        ],
        ict: [
          {id: 'bc', name: 'สาขาวิชาคอมพิวเตอร์ธุรกิจ'},
          {id: 'it', name: 'สาขาวิชาเทคโนโลยีสารสนเทศ'},
          {id: 'gis', name: 'สาขาวิชาภูมิสารสนเทศศาสตร์'},
          {id: 'cs', name: 'สาขาวิชาวิทยาการคอมพิวเตอร'},
          {id: 'cpe', name: 'สาขาวิชาวิศวกรรมคอมพิวเตอร์'},
          {id: 'se', name: 'สาขาวิชาวิศวกรรมซอฟต์แวร์'},
          {id: 'cg', name: 'สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย '},
        ],
        nurs: [
          {id: 'ns', name: 'สาขาวิชาพยาบาลศาสตร'},
        ],
        pham: [
          {id: 'pc', name: 'สาขาวิชาการบริบาลทางเภสัชกรรม '},
          {id: 'cos', name: 'สาขาวิชาวิทยาศาสตร์เครื่องสำอาง'},
        ],
        sci: [
          {id: 'chem', name: 'สาขาวิชาเคมี'},
          {id: 'math', name: 'สาขาวิชาคณิตศาสตร์'},
          {id: 'bio', name: 'สาขาวิชาชีววิทยา'},
          {id: 'phys', name: 'สาขาวิชาฟิสิกส์'},
          {id: 'ess', name: 'สาขาวิชาวิทยาศาสตร์การออกก าลังกายและการกีฬา'},
          {id: 'stt', name: 'สาขาวิชาสถิต'},
          {id: 'cimt', name: 'สาขาวิชาอุตสาหกรรมเคมีและเทคโนโลยีวัสด'},
        ],
        engi: [
          {id: 'me', name: 'สาขาวิชาวิศวกรรมเครื่องกล'},
          {id: 'ce', name: 'สาขาวิชาวิศวกรรมโยธา'},
          {id: 'ee', name: 'สาขาวิชาวิศวกรรมไฟฟา'},
          {id: 'ie', name: 'สาขาวิชาวิศวกรรมอุตสาหการ'},
        ],
        arts: [
          {id: 'md', name: 'สาขาวิชาดนตรีและนาฏศิลป'},
          {id: 'ad', name: 'สาขาวิชาศิลปะและการออกแบบ'},
          {id: 'arc', name: 'สาขาวิชาสถาปัตยกรรม'},
          {id: 'iarc', name: 'สาขาวิชาสถาปัตยกรรมภายใน'},
        ],
        dental: [
          {id: 'ds', name: 'ทันตแพทยศาสตรบัณฑิต'},
        ],
        laws: [
          {id: 'lp', name: 'นิติศาสตรบัณฑิต'},
        ],
        medi: [
          {id: 'mp', name: 'แพทยศาสตรบัณฑิต'},
          {id: 'att', name: 'การแพทย์แผนไทยประยุกต์บัณฑิต '},
          {id: 'tc', name: 'การแพทย์แผนจีนบัณฑิต'},
          {id: 'hp', name: 'สาขาวิชาการส่งเสริมสุขภาพ'},
          {id: 'emo', name: 'สาขาวิชาปฏิบัติการฉุกเฉินการแพทย์'},
          {id: 'eh', name: 'สาขาวิชาอนามัยสิ่งแวดล้อม '},
          {id: 'ohs', name: 'สาขาวิชาอาชีวอนามัยและความปลอดภัย '},
          {id: 'ch', name: 'สาขาวิชาอนามัยชุมชน'},
        ],
        adminis: [
          {id: 'pim', name: 'สาขาวิชาการจัดการนวัตกรรมสาธารณะ'},
          {id: 'psp', name: 'รัฐศาสตรบัณฑิต'},
          {id: 'sd', name: 'สาขาวิชาพัฒนาสังคม'},
        ],
        econ: [
          {id: 'ep', name: 'เศรษศาสตรบัณฑิต'},
          {id: 'cm', name: 'สาขาวิชาการจัดการการสื่อสาร'},
          {id: 'nmc', name: 'สาขาวิชาการสื่อสารสื่อใหม่'},
          {id: 'fb', name: 'สาขาวิชาการเงินและการธนาคาร'},
          {id: 'bm', name: 'สาขาวิชาการจัดการธุรกิจ'},
          {id: 'mark', name: 'สาขาวิชาการตลาด'},
          {id: 'acc', name: 'บัญชีบัณฑิต'},
          {id: 'tour', name: 'สาขาวิชาการท่องเที่ยว'},
        ],
        spnd: [
          {id: 'nd', name: 'สาขาวิชาโภชนาการและการก าหนดอาหาร'},
          {id: 'mic', name: 'สาขาวิชาจุลชีววิทยา'},
          {id: 'bioc', name: 'สาขาวิชาชีวเคม'},
        ],
        apt: [
          {id: 'thai', name: 'สาขาวิชาภาษาไทย'},
          {id: 'chinese', name: 'สาขาวิชาภาษาจีน'},
          {id: 'japenese', name: 'สาขาวิชาภาษาญี่ปุ่น'},
          {id: 'french', name: 'สาขาวิชาภาษาฝรั่งเศส'},
          {id: 'english', name: 'สาขาวิชาภาษาอังกฤษ'},
        ],
        spes: [
          {id: 'es', name: 'สาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม'},
          {id: 'eeng', name: 'สาขาวิชาวิศวกรรมสิ่งแวดล้อม'},
        ],
        sec: [
          {id: 'smaht', name: 'แขนงวิชาคณิตศาสตร์'},
          {id: 'schemi', name: 'แขนงวิชาเคมี'},
          {id: 'sbio', name: 'แขนงวิชาชีววิทยา'},
          {id: 'sphy', name: 'แขนงวิชาฟิสิกส์'},
          {id: 'sphys', name: 'แขนงวิชาพลศึกษา'},
          {id: 'sthai', name: 'แขนงวิชาภาษาไทย'},
          {id: 'seng', name: 'แขนงวิชาภาษาอังกฤษ'},
        ],
      }
    }
  },
  computed: {
    ... mapGetters({presidents: 'getterPRESIDENT', id:'getterID', email: 'getterEMAIL', clubname: 'getterCLUBNAME', 
                    oldclub: 'getterOLDCLUB',newclub: 'getterNEWCLUB',category1: 'getterCATEGORY1',category2: 'getterCATEGORY2',
                    category3: 'getterCATEGORY3',category4: 'getterCATEGORY4',category5: 'getterCATEGORY5',}),
    facSelected() {
      return this.majors[this.Fselected]
    }
  },
  methods: {
    form(){
      this.$store.dispatch('information', [this.president,this.id,this.email,this.clubname,this.oldclub,this.newclub,
                                          this.category1,this.category2,this.category3,this.category4,this.category5,])
    }
  },

}
</script>

<style>

</style>