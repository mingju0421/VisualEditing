<template>
    <div class="page-editor">
        <!-- 左侧导航 -->
        <div class="editor-side-bar border-R">
            <el-tabs tab-position='left' v-model="activeSideBar">
                <template v-for="(item, index) in sidebarMenus">
                    <el-tab-pane :name='item.value' :key="index" v-if="!item.pageMode || (item.pageMode && item.pageMode === pageMode)">
                        <el-tooltip slot="label" class="item" effect='dark' :content='item.label' placement='right'>
                            <i :class="item.elementUiIcon"></i>
                        </el-tooltip>
                    </el-tab-pane>
                </template>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSideBar: 'componentLibs',
            sidebarMenus: [
                { lable: '组件列表', value: 'componentLibs', elementUiIcon: 'el-icon-operation', pageMode: '' },
                { lable: '页面管理', value: 'pageManage', elementUiIcon: 'el-icon-document', pageMode: 'h5' },
                { lable: '模板库', value: 'templateLibs', elementUiIcon: 'el-icon-files', pageMode: '' },
            ]
        }
    }
}
</script>

<style>
</style>