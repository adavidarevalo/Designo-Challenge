exports.createPages = async({actions, graphql, reporter})=>{
    const result = await graphql(`
    query{
        allDatoCmsPagesdinamic {
          nodes {
            name
          }
        }
      }
    `)
    if(result.error){
        reporter.panic("There wasn`t a Error", result.error)
      }
      const pageDinamic = result.data.allDatoCmsPagesdinamic.nodes;
      console.log(pageDinamic)
      pageDinamic.forEach(element => {
        console.log('yes baby')
        actions.createPage({
            path: element.name,
            component: require.resolve('./src/components/ProjectTemplate.js'),
            context: {
                name: element.name
            }
        }) 
      });

  } 