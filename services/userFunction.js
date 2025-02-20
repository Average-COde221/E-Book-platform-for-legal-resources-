const {db} = require('../firebase');

const getDocumentById= async (collectionName,docId) => {
    const doc= await db.collection(collectionName).doc(docId).get();
    return doc.exists ? doc.data : null;
};

module.exports = {getDocumentById};

