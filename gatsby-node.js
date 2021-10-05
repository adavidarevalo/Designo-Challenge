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
      pageDinamic.forEach(info => {
        actions.createPage({
            path: info.name,
            component: require.resolve('./src/components/ProjectTemplate/ProjectTemplate.js'),
            context: {
                name: info.name
            }
        }) 
      });

  } 