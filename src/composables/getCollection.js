import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
  .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot((snap) => {
      let results = []
      snap.docs.forEach(doc => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
      })
      documents.value = results
      error.value = null
    }, (err) => {
      console.log(err.message)
      error.value = error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
      // unsub from prev collection when wathcher is stopped(component unmounted)
      onInvalidate(() => unsub())
    })
    return {documents, error}
}

export default getCollection