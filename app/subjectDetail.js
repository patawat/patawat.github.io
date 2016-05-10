System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubjectDetail;
    return {
        setters:[],
        execute: function() {
            SubjectDetail = (function () {
                // public name: Object = {th: String, en: String};
                // public credit: Object = {seft: String, lab: String,total: String,lecture : String};
                // public prereq: String[];
                // public description : Object = {th: String, en: String};
                // public id: String;
                function SubjectDetail(id, name, credit, prereq, description) {
                    if (name === void 0) { name = { th: String, en: String }; }
                    if (credit === void 0) { credit = { seft: String, lab: String, total: String, lecture: String }; }
                    if (description === void 0) { description = { th: String, en: String }; }
                    this.id = id;
                    this.name = name;
                    this.credit = credit;
                    this.prereq = prereq;
                    this.description = description;
                }
                return SubjectDetail;
            }());
            exports_1("SubjectDetail", SubjectDetail);
        }
    }
});
//# sourceMappingURL=subjectDetail.js.map