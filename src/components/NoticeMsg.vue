<template>
    <span class="icon has-badge-rounded has-badge-success" :data-badge="noticeSum">
        <i class="fas fa-bell"></i>
    </span>
</template>

<script>
export default {
  data() {
    return {
      noticeSum: 10
    };
  }
};
</script>

<style lang="less" scope>
@-webkit-keyframes spinAround {
    from {
        -webkit-transform:rotate(0);
        transform:rotate(0)
    }
    to {
        -webkit-transform:rotate(359deg);
        transform:rotate(359deg)
    }
}
@keyframes spinAround {
    from {
        -webkit-transform:rotate(0);
        transform:rotate(0)
    }
    to {
        -webkit-transform:rotate(359deg);
        transform:rotate(359deg)
    }
}
[data-badge] {
    position:relative
}
[data-badge]::after {
    display:inline-block;
    position:absolute;
    margin:0;
    padding:.1rem .25rem;
    text-align:center;
    white-space:nowrap;
    line-height:1;
    background:#00d1b2;
    background-clip:padding-box;
    border-radius:0;
    box-shadow:0 0 0 1px #fff;
    color:#fff;
    content:attr(data-badge);
    z-index:99
}
[data-badge][data-badge=""]::after {
    vertical-align:inherit
}
[data-badge].has-badge-white::after {
    background:#fff;
    color:#0a0a0a
}
[data-badge].has-badge-black::after {
    background:#0a0a0a;
    color:#fff
}
[data-badge].has-badge-light::after {
    background:#f5f5f5;
    color:#363636
}
[data-badge].has-badge-dark::after {
    background:#363636;
    color:#f5f5f5
}
[data-badge].has-badge-primary::after {
    background:#00d1b2;
    color:#fff
}
[data-badge].has-badge-link::after {
    background:#3273dc;
    color:#fff
}
[data-badge].has-badge-info::after {
    background:#209cee;
    color:#fff
}
[data-badge].has-badge-success::after {
    background:#23d160;
    color:#fff
}
[data-badge].has-badge-warning::after {
    background:#ffdd57;
    color:rgba(0, 0, 0, .7)
}
[data-badge].has-badge-danger::after {
    background:#ff3860;
    color:#fff
}
[data-badge].has-badge-outlined::after {
    background-color:#fff;
    box-shadow:none;
    border:1px solid #00d1b2;
    color:#00d1b2
}
[data-badge].has-badge-outlined.has-badge-white::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #fff;
    color:#fff
}
[data-badge].has-badge-outlined.has-badge-black::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #0a0a0a;
    color:#0a0a0a
}
[data-badge].has-badge-outlined.has-badge-light::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #f5f5f5;
    color:#f5f5f5
}
[data-badge].has-badge-outlined.has-badge-dark::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #363636;
    color:#363636
}
[data-badge].has-badge-outlined.has-badge-primary::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #00d1b2;
    color:#00d1b2
}
[data-badge].has-badge-outlined.has-badge-link::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #3273dc;
    color:#3273dc
}
[data-badge].has-badge-outlined.has-badge-info::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #209cee;
    color:#209cee
}
[data-badge].has-badge-outlined.has-badge-success::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #23d160;
    color:#23d160
}
[data-badge].has-badge-outlined.has-badge-warning::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #ffdd57;
    color:#ffdd57
}
[data-badge].has-badge-outlined.has-badge-danger::after {
    background:#fff;
    box-shadow:none;
    border:1px solid #ff3860;
    color:#ff3860
}
[data-badge].has-badge-rounded::after {
    border-radius:290486px
}
[data-badge]::after {
    min-width:1rem;
    min-height:1rem;
    font-size:.75rem;
    top:0;
    right:0;
    bottom:auto;
    left:auto;
    -webkit-transform:translate(50%, -50%);
    transform:translate(50%, -50%)
}
[data-badge].has-badge-left::after {
    top:0;
    right:auto;
    bottom:auto;
    left:0;
    -webkit-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%)
}
[data-badge].has-badge-bottom::after {
    top:auto;
    right:0;
    bottom:0;
    left:auto;
    -webkit-transform:translate(50%, 50%);
    transform:translate(50%, 50%)
}
[data-badge].has-badge-bottom-left::after {
    top:auto;
    right:auto;
    bottom:0;
    left:0;
    -webkit-transform:translate(-50%, 50%);
    transform:translate(-50%, 50%)
}
[data-badge].has-badge-inline {
    margin-right:1.5rem
}
[data-badge].has-badge-inline::after {
    top:50%;
    right:-20%
}
[data-badge].has-badge-inline.has-badge-left {
    margin-right:inherit;
    margin-left:1.5rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-inline.has-badge-bottom {
    margin-right:1.5rem;
    top:50%;
    right:-20%
}
[data-badge].has-badge-inline.has-badge-bottom-left {
    margin-right:inherit;
    margin-left:1.5rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-small::after {
    min-width:.75rem;
    min-height:.75rem;
    font-size:.5625rem;
    top:0;
    right:0;
    bottom:auto;
    left:auto;
    -webkit-transform:translate(50%, -50%);
    transform:translate(50%, -50%)
}
[data-badge].has-badge-small.has-badge-left::after {
    top:0;
    right:auto;
    bottom:auto;
    left:0;
    -webkit-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%)
}
[data-badge].has-badge-small.has-badge-bottom::after {
    top:auto;
    right:0;
    bottom:0;
    left:auto;
    -webkit-transform:translate(50%, 50%);
    transform:translate(50%, 50%)
}
[data-badge].has-badge-small.has-badge-bottom-left::after {
    top:auto;
    right:auto;
    bottom:0;
    left:0;
    -webkit-transform:translate(-50%, 50%);
    transform:translate(-50%, 50%)
}
[data-badge].has-badge-small.has-badge-inline {
    margin-right:1.125rem
}
[data-badge].has-badge-small.has-badge-inline::after {
    top:50%;
    right:-20%
}
[data-badge].has-badge-small.has-badge-inline.has-badge-left {
    margin-right:inherit;
    margin-left:1.125rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-small.has-badge-inline.has-badge-bottom {
    margin-right:1.125rem;
    top:50%;
    right:-20%
}
[data-badge].has-badge-small.has-badge-inline.has-badge-bottom-left {
    margin-right:inherit;
    margin-left:1.125rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-medium::after {
    min-width:1.2rem;
    min-height:1.2rem;
    font-size:.9rem;
    top:0;
    right:0;
    bottom:auto;
    left:auto;
    -webkit-transform:translate(50%, -50%);
    transform:translate(50%, -50%)
}
[data-badge].has-badge-medium.has-badge-left::after {
    top:0;
    right:auto;
    bottom:auto;
    left:0;
    -webkit-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%)
}
[data-badge].has-badge-medium.has-badge-bottom::after {
    top:auto;
    right:0;
    bottom:0;
    left:auto;
    -webkit-transform:translate(50%, 50%);
    transform:translate(50%, 50%)
}
[data-badge].has-badge-medium.has-badge-bottom-left::after {
    top:auto;
    right:auto;
    bottom:0;
    left:0;
    -webkit-transform:translate(-50%, 50%);
    transform:translate(-50%, 50%)
}
[data-badge].has-badge-medium.has-badge-inline {
    margin-right:1.8rem
}
[data-badge].has-badge-medium.has-badge-inline::after {
    top:50%;
    right:-20%
}
[data-badge].has-badge-medium.has-badge-inline.has-badge-left {
    margin-right:inherit;
    margin-left:1.8rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-medium.has-badge-inline.has-badge-bottom {
    margin-right:1.8rem;
    top:50%;
    right:-20%
}
[data-badge].has-badge-medium.has-badge-inline.has-badge-bottom-left {
    margin-right:inherit;
    margin-left:1.8rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-large::after {
    min-width:1.4rem;
    min-height:1.4rem;
    font-size:1.05rem;
    top:0;
    right:0;
    bottom:auto;
    left:auto;
    -webkit-transform:translate(50%, -50%);
    transform:translate(50%, -50%)
}
[data-badge].has-badge-large.has-badge-left::after {
    top:0;
    right:auto;
    bottom:auto;
    left:0;
    -webkit-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%)
}
[data-badge].has-badge-large.has-badge-bottom::after {
    top:auto;
    right:0;
    bottom:0;
    left:auto;
    -webkit-transform:translate(50%, 50%);
    transform:translate(50%, 50%)
}
[data-badge].has-badge-large.has-badge-bottom-left::after {
    top:auto;
    right:auto;
    bottom:0;
    left:0;
    -webkit-transform:translate(-50%, 50%);
    transform:translate(-50%, 50%)
}
[data-badge].has-badge-large.has-badge-inline {
    margin-right:2.1rem
}
[data-badge].has-badge-large.has-badge-inline::after {
    top:50%;
    right:-20%
}
[data-badge].has-badge-large.has-badge-inline.has-badge-left {
    margin-right:inherit;
    margin-left:2.1rem;
    top:50%;
    left:20%
}
[data-badge].has-badge-large.has-badge-inline.has-badge-bottom {
    margin-right:2.1rem;
    top:50%;
    right:-20%
}
[data-badge].has-badge-large.has-badge-inline.has-badge-bottom-left {
    margin-right:inherit;
    margin-left:2.1rem;
    top:50%;
    left:20%
}
[data-badge].button:not(.is-clipped)::after {
    overflow:visible
}
</style>