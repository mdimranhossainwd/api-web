const loadingData = async () => {
    const getData = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await getData.json()
    const loping = data.data.news_category.slice(0,3);

    const tabContainer = document.getElementById('tabs-container')
    
    loping.forEach(element => {
        console.log(element);
        const newDIV = document.createElement('div');
        newDIV.innerHTML = `
            <a onclick="categori('${element.category_id}')" class="tab">${element.category_name}</a>
        `
        tabContainer.appendChild(newDIV)
    });

    console.log(data.data.news_category)
}

const categori = async (searchId) => {
    const categoriData = await fetch(` https://openapi.programming-hero.com/api/news/category/${searchId}`)
    const get = await categoriData.json()
    console.log(get.data);

    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML = ''
    get.data?.forEach(item => {
        const newDIV = document.createElement('div')
        newDIV.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="${item?.image_url}"
            alt="Img-Loaded"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ${item?.title?.slice(0,42)}
            <div class="badge badge-secondary p-5 rounded-20xl">
              Execently
            </div>
          </h2>

          <p>
            Wednesday, August 24, 2022 | Tag cloud Tags: Bidan, EU, Euro,
            Europe, Joe Biden,
          </p>
          <div class="card-footer flex justify-between">
            <div class="flex">
              <div>
                <div class="avatar-online">
                  <div class="w-14 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <h6>Jimmy Dane</h6>
                <small>2022-08-24 17:27:34</small>
              </div>
            </div>
            <div class="card-detaild-btn">
              <button
                class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
        `
        itemContainer.appendChild(newDIV)
    })
    
}

loadingData()