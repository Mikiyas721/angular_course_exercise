import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0
  pages = [
    {
      title: 'Beach',
      imageUrl: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c='
    },
    {
      title: 'Horse',
      imageUrl: 'https://media.istockphoto.com/photos/bay-horses-grazing-in-pasture-enjoying-the-early-spring-sunshine-the-picture-id1248172569?b=1&k=20&m=1248172569&s=170667a&w=0&h=m4RODImpRTR8O0-rv-NpfJ5kmxsNNOceldQIj7B4UOw='
    },
    {
      title: 'Dog',
      imageUrl: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?b=1&k=20&m=1280392364&s=170667a&w=0&h=NGYg-_9YcmJt2vkj79MvNxEcUTMN66Pa0KfvZ5MXVjI='
    },
    {
      title: 'Shark',
      imageUrl: 'https://media.istockphoto.com/photos/humpback-whale-playfully-swimming-in-clear-blue-ocean-picture-id1301667498?b=1&k=20&m=1301667498&s=170667a&w=0&h=4vBxtBbCc71tOOtE-5uYNew0xh8B_SSliPoXtmSdFIM='
    },
    {
      title: 'Jungle',
      imageUrl: 'https://media.istockphoto.com/photos/the-anvil-morning-mist-picture-id535499464?b=1&k=20&m=535499464&s=170667a&w=0&h=JOKbtcOwVAYSVp3tB_MYIupW4HXVinQFdz0vY2CLMBU='
    },
    {
      title: 'Aeroplane',
      imageUrl: 'https://media.istockphoto.com/photos/passenger-airplane-taking-of-at-sunrise-picture-id1225840727?b=1&k=20&m=1225840727&s=170667a&w=0&h=dj8ErCdeGS_OG83VzmFZyulXwO62t1HdTYgSrkdbfGI='
    },
    {
      title: 'Beach',
      imageUrl: 'https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c='
    },
    {
      title: 'Horse',
      imageUrl: 'https://media.istockphoto.com/photos/bay-horses-grazing-in-pasture-enjoying-the-early-spring-sunshine-the-picture-id1248172569?b=1&k=20&m=1248172569&s=170667a&w=0&h=m4RODImpRTR8O0-rv-NpfJ5kmxsNNOceldQIj7B4UOw='
    },
    {
      title: 'Dog',
      imageUrl: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?b=1&k=20&m=1280392364&s=170667a&w=0&h=NGYg-_9YcmJt2vkj79MvNxEcUTMN66Pa0KfvZ5MXVjI='
    },
    {
      title: 'Shark',
      imageUrl: 'https://media.istockphoto.com/photos/humpback-whale-playfully-swimming-in-clear-blue-ocean-picture-id1301667498?b=1&k=20&m=1301667498&s=170667a&w=0&h=4vBxtBbCc71tOOtE-5uYNew0xh8B_SSliPoXtmSdFIM='
    },
    {
      title: 'Jungle',
      imageUrl: 'https://media.istockphoto.com/photos/the-anvil-morning-mist-picture-id535499464?b=1&k=20&m=535499464&s=170667a&w=0&h=JOKbtcOwVAYSVp3tB_MYIupW4HXVinQFdz0vY2CLMBU='
    },
    {
      title: 'Aeroplane',
      imageUrl: 'https://media.istockphoto.com/photos/passenger-airplane-taking-of-at-sunrise-picture-id1225840727?b=1&k=20&m=1225840727&s=170667a&w=0&h=dj8ErCdeGS_OG83VzmFZyulXwO62t1HdTYgSrkdbfGI='
    }
  ]

  onItemClick(index: number) {
    this.currentPage = index
  }

  getWindowIndex(index: number) {
    if (this.currentPage == 0) return index < 5
    else if (this.currentPage == this.pages.length - 1) return index > this.pages.length - 6
    else if (this.currentPage < Math.floor((this.pages.length - 1) / 2)) return this.currentPage - 2 < index && index < this.currentPage + 4
    else return this.currentPage - 4 < index && index < this.currentPage + 2
  }
}
